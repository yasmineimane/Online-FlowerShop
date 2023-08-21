import React from 'react'
import './nav.css'
import { useState } from 'react'
import { ThemeProvider, theme, ColorModeProvider, CSSReset  } from '@chakra-ui/react';
import Them from '../thems/Them';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset/>
          <ul>
              <li><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>pookal</a></li>
              <li><a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>AboutUs</a></li>
              <li><a href="#shop" onClick={() => setActiveNav('#shop')} className={activeNav === '#shop' ? 'active' : ''}>Shop</a></li>
              <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
              <li><Them/></li>
          </ul>
        </ColorModeProvider>
      </ThemeProvider>
        
        
        
        
    </nav>
  )
}

export default Nav