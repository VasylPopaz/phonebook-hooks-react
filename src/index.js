import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from 'styles/GlobalStyle.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
