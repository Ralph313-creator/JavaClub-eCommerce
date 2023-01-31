import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="font-sans">
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="grid grid-col-1 justify-items-center m-10">
        <div>Shipping</div>

        <div className="  text-center">
          <table className=" w-64 p-5 bg-slate-400 rounded-md">
            <tbody className="text-left h-52">
              <tr className="text-center">
                <th colSpan={2}>Order Summary</th>
              </tr>
              <tr className=" p-[]">
                <th className="px-5">Item:</th>
                <td className="px-5">Content</td>
              </tr>
              <tr>
                <th className="px-5">Shipping:</th>
                <td className="px-5">Content</td>
              </tr>
              <tr>
                <th className="px-5">Tax:</th>
                <td className="px-5">Content</td>
              </tr>
              <tr>
                <th className="px-5">Total:</th>
                <td className="px-5">Content</td>
              </tr>
              <tr className="text-center">
                <th colSpan={2} className="py-6">
                  <button className="btn-black">Place Order</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
