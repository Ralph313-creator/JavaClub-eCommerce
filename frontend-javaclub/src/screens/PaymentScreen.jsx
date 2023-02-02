import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {savePaymentMethod} from '../action/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
// import Message from '../components/Message';

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const {shippingAddress, paymentMethod} = cart;
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate('/shipping');
  }

  const [payWith, setPaymentMethod] = useState('Paypal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod({payWith}));
    navigate('/placeorder');
  };

  return (
    <>
      <div className="grid my-10  justify-items-stretch mx-auto max-w-xl">
        <CheckoutSteps step1 step2 step3 />
        <div className="relative">
          <form
            onSubmit={submitHandler}
            className=" w-full h-full bg-white shadow-lg p-4 rounded-md"
          >
            <h2 className=" text-6xl font-bold text-center py-8 capitalize">
              Payment Method
              <i className="fa-solid fa-cash-register ml-4"></i>
            </h2>

            <div className="flex items-center flex-col font-sans mb-10">
              <div className="text-2xl">Shipping Address</div>
              <table className="border ">
                <tbody className=" text-right h-[10rem]">
                  <tr className="border-b">
                    <th>Address:</th>
                    <td className=" text-left">{shippingAddress.address}</td>
                  </tr>
                  <tr className="border-b">
                    <th>City:</th>
                    <td className=" text-left">{shippingAddress.city}</td>
                  </tr>
                  <tr className="border-b">
                    <th>Posta Codel:</th>
                    <td className=" text-left">{shippingAddress.postalCode}</td>
                  </tr>
                  <tr className="border-b">
                    <th>Country:</th>
                    <td className=" text-left">{shippingAddress.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" font-sans">
              <div className="font-bold text-xl">Select Method</div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  className="form-radio"
                  checked={payWith === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="ml-2">PayPal or Credit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="Gcash"
                  name="paymentMethod"
                  value="Gcash"
                  className="form-radio"
                  checked={payWith === 'Gcash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="ml-2">Pay with Gcash</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  className="form-radio"
                  checked={payWith === "Cash on Delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="ml-2">Cash on Delivery</label>
              </div>
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

export default PaymentScreen;
