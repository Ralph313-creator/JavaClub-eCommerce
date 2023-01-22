import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AllproductScreen from './screens/AllproductScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product" element={<AllproductScreen />} />
        <Route path="/product/:prod_id" element={<ProductScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
