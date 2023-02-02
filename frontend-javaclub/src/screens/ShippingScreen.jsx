import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import {saveShippingAddress} from '../action/cartActions';
// import Message from '../components/Message';

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const {shippingAddress} = cart;

  const navigate = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);

  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address, city, postalCode, country}));
    navigate('/payment');
  };

  return (
    <>
      <div className="grid my-10  justify-items-stretch mx-auto max-w-xl">
        <CheckoutSteps step1 step2 />
        <div className="relative">
          <form
            onSubmit={submitHandler}
            className=" w-full h-full bg-white shadow-lg p-4 rounded-md"
          >
            <h2 className=" text-6xl font-bold text-center py-8 capitalize">
              Shipping
              <i className="fa-solid fa-truck-fast ml-4"></i>
            </h2>
            <div className="flex flex-col py-2 font-sans">
              <label>Address</label>
              <input
                required
                className="border p-2"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>
            <div className="flex flex-col py-2 font-sans">
              <label>City</label>
              <input
                required
                className="border p-2"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </div>
            <div className="flex flex-col py-2 font-sans">
              <label>Postal Code</label>
              <input
                required
                className="border p-2 font-sans"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Enter Postal Code"
              />
            </div>
            <div className="flex flex-col py-2 font-sans">
              <label>Country</label>
              <input
                required
                className="border p-2 font-sans"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
              />
            </div>
            <button
              type="submit"
              className="font-sans border  my-5 py-2 btn-black text-white"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingScreen;
