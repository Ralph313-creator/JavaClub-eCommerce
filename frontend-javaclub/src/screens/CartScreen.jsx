import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Message} from '../components/Message';
import {addToCart} from '../action/cartActions';

const CartScreen = ({id, location, history}) => {
  const productId = id;
  let qty;
  if (location) {
    qty = new URLSearchParams(location.search).get('qty');
  }

  console.log(productId, qty);

  return <div>CartScreen</div>;
};

export default CartScreen;
