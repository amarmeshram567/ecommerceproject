import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from './components/Cart';
import productList from './components/data';
import Footer from './components/Footer';
import Product from './components/Product';

const App = () => {
  
  const [productId, setProductId] = useState("");
 
  const [cartAllProduct, setCartAllProduct] = useState([]);

 

  useEffect(() => {
    const filteredObject = productList.filter((product) => 
      product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject])

  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <Home />
            } 
          />
          <Route path='/cart' element={
            <Cart 
              cartAllProduct={cartAllProduct}
              setCartAllProduct={setCartAllProduct} 
            />
            } 
          />

          <Route path='/product' element={
            <Product
            setProductId={setProductId}
          />
          }
          />

          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


