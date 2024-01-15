import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from 'styles/GlobalStyle.styled';
import {App} from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyle />
  </>
);
