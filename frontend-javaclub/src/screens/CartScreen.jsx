import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../action/cartActions';


const CartScreen = () => {
  // Fetch the productId from the URL
  const {id: productId} = useParams();

  // Fetch the value of 'qty' from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const qty = Number(urlParams.get('qty')) || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;
