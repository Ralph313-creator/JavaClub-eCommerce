import React from 'react';
import {Link} from 'react-router-dom';
// import {Nav} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <ul class="flex justify-center items-center mb-4 font-sans text-bold">
      <li class="mr-4">
        {step1 ? (
          <Link to="/login" class="text-blue-500 hover:text-blue-800">
            Sign In
          </Link>
        ) : (
          <span class="text-gray-500 cursor-not-allowed">Sign In</span>
        )}
      </li>
      <li class="mr-4">
        {step2 ? (
          <Link to="/login/shipping" class="text-blue-500 hover:text-blue-800">
            Shipping
          </Link>
        ) : (
          <span class="text-gray-500 cursor-not-allowed">Shipping</span>
        )}
      </li>
      <li class="mr-4">
        {step3 ? (
          <Link to="/payment" class="text-blue-500 hover:text-blue-800">
            Payment
          </Link>
        ) : (
          <span class="text-gray-500 cursor-not-allowed">Payment</span>
        )}
      </li>
      <li>
        {step4 ? (
          <Link to="/placeorder" class="text-blue-500 hover:text-blue-800">
            Place Order
          </Link>
        ) : (
          <span class="text-gray-500 cursor-not-allowed">Place Order</span>
        )}
      </li>
    </ul>
  );
};

export default CheckoutSteps;
