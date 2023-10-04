import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Pokemon from '../components/Pokemon';
const MainLayout = () => {
 return (
  <div>
<Header/>
   <Outlet/>
   <Pokemon/>
<Footer/>
  </div>
 );
};

export default MainLayout;