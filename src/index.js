import { ColorModeScript } from '@chakra-ui/react';
// import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// import theme from '../src/components/thems/Them'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
  {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
  <ColorModeScript/>
  <App/>
  </>


  // <StrictMode>
  //   <ColorModeScript />
  //   <App />
  // </StrictMode>
);


