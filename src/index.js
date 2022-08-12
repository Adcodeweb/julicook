import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Details from './Pages/Details';
import Footer from './Components/Footer';
import Postres from './Pages/Postres';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receta" element={<Products />} />
      <Route path="/receta/:productId" element={<Details />} />
      <Route path="postres" element={<Postres />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
