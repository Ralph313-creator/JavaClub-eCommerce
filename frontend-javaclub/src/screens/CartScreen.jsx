import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {addToCart, removeFromCart} from '../action/cartActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CartScreen = () => {
  // Fetch the productId from the URL
  const {id: productId} = useParams();

  // Fetch the value of 'qty' from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const qty = Number(urlParams.get('qty')) || 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const {cartItems, loading, error} = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const navigate = useNavigate();
  // rest of your code

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div className="font-sans mx-8">
          <div className="py-12">
            <div className="mx-auto bg-white min-h-[40rem] overflow-auto shadow-lg rounded-lg md:max-w-[80rem]">
              <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
                    <div className="col-span-2">
                      <div className="flex flex-col md:flex-row items-center  justify-between">
                        <h1 className="text-xl font-medium ">Shopping Cart</h1>
                        <Link to="/product">
                          <i className="fa fa-arrow-left text-sm pr-2"></i>
                          <span className="text-md  font-medium text-blue-500">
                            Continue Shopping
                          </span>
                        </Link>
                      </div>

                      {/* Cart Item */}
                      {cartItems.length === 0 ? (
                        <Message message="Your Cart is empty" />
                      ) : (
                        cartItems.map((item) => (
                          <div
                            key={item.product}
                            className="flex flex-col md:flex-row justify-evenly items-center mt-6 pt-6 border-t"
                          >
                            <Link to={`/product/${item.product}`}>
                              <div className="flex flex-col lg:flex-row items-center justify-center">
                                <img
                                  src={item.image}
                                  width="200"
                                  className="rounded-md order-last lg:order-first"
                                  alt="item.name"
                                />

                                <div className="flex flex-col ml-3">
                                  <span className="text-md font-medium">
                                    {item.name}
                                  </span>
                                  <span className="text-xs font-light text-gray-400">
                                    {item.product}
                                  </span>
                                </div>
                              </div>
                            </Link>
                            <div className="flex justify-center items-center my-5">
                              <div className="mr-3 flex">
                                <select
                                  className=" border border-brightYellow text-md rounded-lg focus:border-blue-500 w-20 p-2.5 dark:bg-grey  dark:text-black"
                                  value={item.qty}
                                  onChange={(e) =>
                                    dispatch(
                                      addToCart(
                                        item.product,
                                        Number(e.target.value)
                                      )
                                    )
                                  }
                                >
                                  {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>

                              <div className="pr-8">
                                <span className="text-xl font-medium">
                                  ₱ {item.price}
                                </span>
                              </div>
                              <div>
                                <button
                                  onClick={() =>
                                    removeFromCartHandler(item.product)
                                  }
                                >
                                  <i className="fa-solid fa-trash-can text-2xl hover:text-red-500"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          /* End Cart Item */
                        ))
                      )}
                    </div>

                    <div className="flex justify-center m-3">
                      <div className=" p-3 bg-gray-200 shadow-xl rounded relative h-[15rem] w-[20rem] flex justify-center">
                        <table className="w-[15rem] text-left">
                          <tbody>
                            <tr>
                              <th>Total item : </th>
                              <td className="w-28">
                                {cartItems.reduce(
                                  (acc, item) => acc + item.qty,
                                  0
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>Subtotal:</th>
                              <td className="w-28">
                                ₱{' '}
                                {cartItems
                                  .reduce(
                                    (acc, item) => acc + item.qty * item.price,
                                    0
                                  )
                                  .toFixed(2)}
                              </td>
                            </tr>

                            <tr className="text-center">
                              <th colSpan="2">
                                <button
                                  className={`btn-black whitespace-nowrap ${
                                    cartItems.length <= 0
                                      ? 'bg-[#cccccc] text-[#666666] hover:bg-[#cccccc] '
                                      : ''
                                  }`}
                                  onClick={
                                    cartItems.length === 0
                                      ? null
                                      : checkoutHandler
                                  }
                                >
                                  PROCCED TO CHECKOUT
                                </button>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartScreen;
