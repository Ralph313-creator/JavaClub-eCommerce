import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {listProducts} from '../action/productActions';
import ProductBanner from '../components/ProductBanner';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className=" min-h-screen mt-[8rem]">
      <h1 className="text-5xl my-10 "></h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message message={error} />
      ) : (
        <>
          <ProductBanner products={products} />
          <div className="flex items-center flex-col mb-10 px-0 lg:px-36">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-32 gap-y-20 ">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
