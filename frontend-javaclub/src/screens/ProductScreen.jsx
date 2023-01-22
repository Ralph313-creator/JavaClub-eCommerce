import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const {prod_id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      // corrected variable name
      const {data} = await axios.get(`/api/products/${prod_id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [prod_id]); // added dependency

  return (
    <>
      <div className="absolute font-bold left-[10%] sm:left-[20%] top-[6.5%] md:top-[15%] ">
        <Link
          className="bg-black text-white rounded-md px-8 py-2 font-hand"
          to="/product"
        >
          GO BACK
        </Link>
      </div>
      <div className="flex font-sans justify-center  py-[10rem] flex-wrap px-2 md:px-[8rem]">
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
              <tr>
                <th colSpan={2} className="h-20">
                  <button className="bg-black text-white rounded-md px-8 py-2 font-hand">
                    ADD TO CART
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
