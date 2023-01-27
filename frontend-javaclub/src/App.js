import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AllproductScreen from './screens/AllproductScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products" component={AllproductScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
