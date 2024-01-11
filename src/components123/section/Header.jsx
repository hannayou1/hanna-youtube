import React from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';


export const Header = () => {
  return (
    <header id='header' role='banner'>
        <Logo/>
        <Menu/>
        <Sns/>
    </header>
  )
}

export default Header