import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {createOrder} from '../action/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  // Caculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  // fixed calculation
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 100 : 0);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const {order, success, error} = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/orders/${order._id}`);
    }
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod.payWith,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div className="font-lato mt-10 h-screen">
      <CheckoutSteps step1 step2 step3 step4 />

      <div className="grid grid-cols-1 md:grid-cols-3 h-screen  gap-y-5 md:gap-5 max-w-[70rem] justify-items-center max-h-[35rem] mx-auto">
        <div className="bg-white p-4 mx-10 overflow-auto font-lato rounded-md shadow-lg col-span-2">
          <div>
            <h2 className=" uppercase text-xl font-bold mb-1">shipping</h2>
            <p className="mb-3 font-medium">
              <strong>Address: </strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>

          <div>
            <h2 className=" uppercase text-xl font-bold  mb-1">
              payment method
            </h2>
            <p className="mb-3 font-medium">
              <strong>Method: </strong>
              {cart.paymentMethod.payWith}
            </p>
          </div>
          {/* Order Item */}
          <div>
            <h2 className=" uppercase text-xl font-bold">order items</h2>
            {cart.cartItems.length === 0 ? (
              <Message message="You Order Nothing" />
            ) : (
              <div>
                {cart.cartItems.map((item, index) => (
                  <div
                    className="flex justify-between flex-col md:flex-row items-center p-2 border border-x-0"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[5rem] rounded-md border-brown  hover:border-darkBrown border-2"
                    />
                    <Link
                      to={`/product/${item.product}`}
                      className="text-md font-semibold hover:text-brightYellow md:mr-[10rem]"
                    >
                      {item.name}
                    </Link>
                    <div className="text-xl">
                      {item.qty}
                      <strong> x </strong> {cart.itemsPrice.toFixed(2)} = ₱
                      {(item.qty * item.price).toFixed(3)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <table className="border bg-white hover:shadow-lg rounded-lg shadow-lg self-center">
            <tbody>
              <tr>
                <th colSpan={2} className="py-3 uppercase">
                  Order Summary
                </th>
              </tr>
              <tr className="border h-[3rem]">
                <th className="w-[8rem]">Item </th>
                <td className="w-[8rem] text-center">
                  ₱ {cart.itemsPrice.toFixed(2)}
                </td>
              </tr>
              <tr className="border h-[3rem]">
                <th className="w-[8rem]">Shipping</th>
                <td className="w-[8rem] text-center">₱ {cart.shippingPrice}</td>
              </tr>

              <tr className="border h-[3rem]">
                <th className="w-[8rem]">Tax</th>
                <td className="w-[8rem] text-center">₱ {cart.taxPrice}</td>
              </tr>

              <tr className="border h-[3rem]">
                <th className="w-[8rem]">Total</th>
                <td className="w-[8rem] text-center">₱ {cart.totalPrice}</td>
              </tr>

              <tr>
                <th colSpan={2} className="h-20">
                  <button
                    className={`btn-black ${
                      cart.cartItems.length === 0 &&
                      'bg-[#cccccc] text-[#666666] hover:bg-[#cccccc] '
                    }`}
                    onClick={
                      cart.cartItems.length === 0 ? null : placeOrderHandler
                    }
                  >
                    Place Order
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
