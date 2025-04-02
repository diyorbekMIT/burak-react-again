import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Product } from './components/screens/productsPage';
import { Order } from './components/screens/ordersPage';
import { Help } from './components/screens/helpPage';
import { User } from './components/screens/userPage';
import { Home } from './components/screens/homePage';
import { HomeNavbar } from './components/headers/HomeNavbat';
import { OtherNavbar } from './components/headers/OtherNavbar';
import  Footer  from './components/footer';
import '../css/navbar.css';
import '../css/footer.css';

function App() {
  const location = useLocation();
  return (
    <>
     {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
     <Routes>
        <Route path="/products" element={<Product />}/>,
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
