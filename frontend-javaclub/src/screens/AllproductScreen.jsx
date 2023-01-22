import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <div className="flex items-center flex-col mb-10 px-0 lg:px-36 ">
        <h1 className="text-5xl my-10 self-start ">Lates product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-32 gap-y-20 ">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
