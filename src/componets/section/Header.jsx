import React, { useState } from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';


export const Header = () => {

  const [isMenuActive, setIsMenuActive] =useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); //반대로 넣어 줄 거임
  }

  return (
    <header id='header' role='banner' className={isMenuActive ? 'active' : ''}>
        <Logo toggleMenu={toggleMenu}/>
        <Menu/>
        <Sns/>
    </header>
  )
}

export default Header