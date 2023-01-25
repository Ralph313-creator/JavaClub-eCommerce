import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom';
import Rating from '../components/Rating';
import {listProductDetails} from '../action/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
      <div className="absolute font-bold left-[10%] sm:left-[20%] top-[6.5%] md:top-[15%]">
        <Link className="btn-black" to="/product">
          GO BACK
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <div className="flex font-sans justify-center  py-[8rem] flex-wrap px-2 md:px-[8rem]">
          <div className="border rounded-md overflow-hidden drop-shadow-lg my-4">
            <img className="w-[30rem]" src={product.image} alt={product.name} />
          </div>

          <div className="drop-shadow-lg bg-slate-100 flex flex-col my-4 p-2 order-last basis-[50rem] 2xl:basis-[28rem] mx-18">
            <h1 className="mb-5 mx-2 text-lg font-bold">{product.name}</h1>
            <p className="mb-5 mx-2">Price: ₱{product.price}</p>
            <div className="mb-5 mx-2">
              <Rating
                ratingVal={product.rating}
                revVal={`${product.numberReviews} reviews`}
                color="#ffa534"
              />
            </div>

            <div className="mx-2 mt-5">
              <p>
                Description: <br />
                {product.description}
              </p>
            </div>
          </div>

          <div className="my-4 mx-10 2xl:order-last">
            <table className="border bg-slate-100 drop-shadow-md">
              <tbody>
                <tr className="border h-[4rem]">
                  <th className="w-[8rem]">Price: </th>
                  <td className="w-[8rem] text-center">₱ {product.price}</td>
                </tr>
                <tr className="border h-[4rem]">
                  <th className="w-[8rem]">Status: </th>
                  <td className="w-[8rem] text-center">
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </td>
                </tr>
                {product.countInStock > 0 && (
                  <tr className="border h-[4rem]">
                    <th className="w-[8rem]">Quantity: </th>
                    <td className="w-[8rem] text-center">
                      <select
                        className=" border border-brightYellow text-md rounded-lg focus:border-blue-500 w-20 p-2.5 dark:bg-grey  dark:text-black"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )}
                <tr>
                  <th colSpan={2} className="h-20">
                    <button
                      onClick={addToCartHandler}
                      className={`btn-black ${
                        product.countInStock > 0
                          ? ''
                          : 'disable bg-[#cccccc] text-[#666666] '
                      }`}
                    >
                      ADD TO CART
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
