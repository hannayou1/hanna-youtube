import React, { useState } from 'react';

import Menu from '../header/Menu';


export const Header = () => {

  const [isMenuActive, setIsMenuActive] =useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); //반대로 넣어 줄 거임
  }

  return (
    <header id='header' role='banner' className='side-menu'>
        <Menu/>

    </header>
  )
}

export default Header