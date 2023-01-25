import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <div className="w-[18rem] h-[28rem] border border-black rounded-xl overflow-hidden">
      <Link to={`/product/${product._id}`}>
        <img className="w-[100%]" src={product.image} alt={product['name']} />
      </Link>
      <div className="font-sans text-lg p-2 hover:blur-sm">
        <h3>{product.name}</h3>
        <div>
          <Rating
            ratingVal={product.rating}
            revVal={`${product.numberReviews} reviews`}
            color="#ffa534"
          />
          <span>from: {product.numberReviews} reviews</span>
          <p>Price: ₱{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
