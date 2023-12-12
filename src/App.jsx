import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Products from './components/Products';
import Product from './components/Product';



function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:id" element={<Product/>}/>
   </Routes>
  
  
  );
}

export default App
