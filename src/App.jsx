import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About'
import Shop from './components/shop/Shop'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { ThemeProvider, theme, ColorModeProvider, CSSReset  } from '@chakra-ui/react';
// import Them from './components/thems/Them';


function App() {
  return (
    <>
        <Header/>
        <About/>
        <Shop/>
        <Contact/>
        <Footer/>
    </>
    
  );
}

export default App;
