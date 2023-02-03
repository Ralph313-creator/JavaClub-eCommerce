import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ProductBanner = (products) => {
  const [index, setIndex] = useState(0);

  console.log(products);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % products.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, products.length]);

  return (
    <div>
      <div>
        <img src={products[index].image} alt="img" />
      </div>
    </div>
  );
};

export default ProductBanner;
