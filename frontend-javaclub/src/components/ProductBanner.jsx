import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProductBanner = ({products}) => {
  const [index, setIndex] = useState(0);

  console.log(products);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % products.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, products.length]);

  return (
    products.length > 0 && (
      <div className="flex justify-center mb-28 gap-x-3">
        <div className="flex flex-col justify-between w-[25rem]">
          <div className="info-product">A Guide to Must-Try Pastries</div>
          <div className="text-[#a9b2ac] text-2xl tracking-wide mx-5">
            {products[index].description}
          </div>
          <Link
            to={`/product/${products[index]._id}`}
            className="bg-[#e3b505] border-2 border-brown w-24 mb-10 text-3xl py-1 pl-1 rounded-md hover:bg-[#f2e083]"
          >
            Order Now
          </Link>
        </div>
        <div className="img-carousel-container">
          <Link to={`/product/${products[index]._id}`}>
            <img
              src={products[index].image}
              alt="img"
              className="img-carousel"
            />
          </Link>
        </div>
      </div>
    )
  );
};

export default ProductBanner;
