import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {getOrderDetails} from '../action/orderActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const orderId = id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const {order, loading, error} = orderDetails;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message />
  ) : (
    <>
      {' '}
      <div className="font-lato mt-10 my-10">
        <h1 className="text-center md:text-xl mb-5 font-semibold">
          Order ID:{order._id}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen  gap-y-5 md:gap-5 max-w-[70rem] justify-items-center md:max-h-[35rem] mx-auto">
          <div className="bg-white p-4 mx-10 overflow-auto font-lato rounded-md shadow-lg col-span-2">
            <div>
              <h2 className=" uppercase text-xl font-bold mb-1">shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p className="mb-3 font-medium">
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>

              {order.isDelivered ? (
                <div className=" bg-green-300 p-2 rounded-md">
                  Delivered on {order.deliveredAt}
                </div>
              ) : (
                <div className=" bg-red-300 p-2 rounded-md">Not Delivered</div>
              )}
            </div>

            <div>
              <h2 className=" uppercase text-xl font-bold  mb-1">
                payment method
              </h2>
              <p className="mb-3 font-medium">
                <strong>Method: </strong>
              </p>

              {order.isPaid ? (
                <div className=" bg-green-300 p-2 rounded-md">
                  Paid on {order.paidAt}
                </div>
              ) : (
                <div className=" bg-red-300 p-2 rounded-md">Not Paid</div>
              )}
            </div>
            {/* Order Item */}
            <div>
              <h2 className=" uppercase text-xl font-bold">order items</h2>
              {order.orderItems.length === 0 ? (
                <Message message="You Order Nothing" />
              ) : (
                <div>
                  {order.orderItems.map((item, index) => (
                    <div
                      className="flex justify-between flex-col md:flex-row items-center p-2 border border-x-0"
                      key={index}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[5rem] rounded-md border-brown  hover:border-darkBrown border-2"
                      />
                      <Link
                        to={`/product/${item.product}`}
                        className="text-md font-semibold hover:text-brightYellow md:mr-[10rem]"
                      >
                        {item.name}
                      </Link>
                      <div className="text-xl">
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <table className="border bg-white hover:shadow-lg rounded-lg shadow-lg self-center">
              <tbody>
                <tr>
                  <th colSpan={2} className="py-3 uppercase">
                    Order Summary
                  </th>
                </tr>
                <tr className="border h-[3rem]">
                  <th className="w-[8rem]">Item </th>
                  <td className="w-[8rem] text-center">
                    ₱{order.itemsPrice.toFixed(2)}
                  </td>
                </tr>
                <tr className="border h-[3rem]">
                  <th className="w-[8rem]">Shipping</th>
                  <td className="w-[8rem] text-center">
                    ₱ {order.shippingPrice}
                  </td>
                </tr>

                <tr className="border h-[3rem]">
                  <th className="w-[8rem]">Tax</th>
                  <td className="w-[8rem] text-center">₱ {order.taxPrice}</td>
                </tr>

                <tr className="border h-[3rem]">
                  <th className="w-[8rem]">Total</th>
                  <td className="w-[8rem] text-center">₱ {order.totalPrice}</td>
                </tr>

                <tr>
                  <th colSpan={2} className="h-20"></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
