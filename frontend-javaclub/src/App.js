import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllproductScreen from './screens/AllproductScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product" element={<AllproductScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id?" element={<CartScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
