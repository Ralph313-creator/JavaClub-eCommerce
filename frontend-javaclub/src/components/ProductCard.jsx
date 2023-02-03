import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  return (
    <div className="w-[18rem] h-[28rem] bg-white shadow-md hover:shadow-2xl rounded-xl overflow-hidden">
      <img className="w-[100%]" src={product.image} alt={product.name} />

      <div className="font-lato font-semibold text-md relative p-2 hover:blur-sm">
        <Link to={`/product/${product._id}`} className="">
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
        </Link>
      </div>
    </div>
  );
};

export default Product;
