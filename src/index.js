import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Mui5 & Mui 4 Core components
import '@react-page/editor/lib/index.css';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderV4, StylesProvider } from '@material-ui/core/styles';

import { themeV4, themeV5 } from './mui/customTheme';
import { generateClassName } from './mui/customClassName';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
        <ThemeProviderV4 theme={themeV4}>
          <ThemeProviderV5 theme={themeV5}>
            <App />
          </ThemeProviderV5>
        </ThemeProviderV4>
    </StylesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
