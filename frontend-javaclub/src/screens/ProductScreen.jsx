import React from 'react';
import products from '../products';
import Product from '../components/ProductCard';

const ProductScreen = () => {

  return (
    <>
      <div className="flex items-center flex-col m-10 px-0 lg:px-36 ">
        <h1 className="text-5xl my-10 self-start ">Lates product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-32 gap-y-20 ">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
