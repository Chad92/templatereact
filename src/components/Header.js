import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
 return (
  <div className='container-menu'>
   <h1>Logo</h1>
   <ul className='ul-header'>
   <Link to={'home'}>Home</Link>
   <Link to={'test'}>Pokédex</Link>
   </ul>
  </div>
 );
};

export default Header;