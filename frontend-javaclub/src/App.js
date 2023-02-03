import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AllproductScreen from './screens/AllproductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path="/orders/:id" element={<OrderScreen />} />
        <Route path="/login/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/product" element={<AllproductScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
