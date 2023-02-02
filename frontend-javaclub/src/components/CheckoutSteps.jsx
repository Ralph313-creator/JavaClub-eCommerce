import React from 'react';
import {Link} from 'react-router-dom';
// import {Nav} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <ul className="flex justify-center items-center mb-4 font-lato text-bold">
      <li className="mr-4">
        {step1 ? (
          <Link
            to="/login"
            className="text-darkBrown hover:text-brightYellow font-bold"
          >
            Sign In
          </Link>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">Sign In</span>
        )}
      </li>
      <li className="mr-4">
        {step2 ? (
          <Link
            to="/login/shipping"
            className="text-darkBrown hover:text-brightYellow font-bold"
          >
            Shipping
          </Link>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">Shipping</span>
        )}
      </li>
      <li className="mr-4">
        {step3 ? (
          <Link
            to="/payment"
            className="text-darkBrown hover:text-brightYellow font-bold"
          >
            Payment
          </Link>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">Payment</span>
        )}
      </li>
      <li>
        {step4 ? (
          <Link
            to="/placeorder"
            className="text-darkBrown hover:text-brightYellow font-bold"
          >
            Place Order
          </Link>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">Place Order</span>
        )}
      </li>
    </ul>
  );
};

export default CheckoutSteps;
