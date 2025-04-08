import '../css/home.css'
import '../css/products.css'
import '../css/app.css'
import '../css/index.css'
import '../css/navbar.css';
import '../css/footer.css';


import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Order } from './components/screens/ordersPage';
import { Help } from './components/screens/helpPage';
import { User } from './components/screens/userPage';
import { Home } from './components/screens/homePage';
import { HomeNavbar } from './components/headers/HomeNavbat';
import { OtherNavbar } from './components/headers/OtherNavbar';
import  Footer  from './components/footer';

import { ProductsPage } from './components/screens/productsPage';



function App() {
  const location = useLocation();
  return (
    <>
     {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
     <Routes>
        <Route path="/products/*" element={<ProductsPage />}/>,
        <Route path="/orders" element={<Order />}/>,
        <Route path="/help" element={<Help />}/>,
        <Route path="/user" element={<User />}/>,
        <Route path="/" element={<Home />}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App;
