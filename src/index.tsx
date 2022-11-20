import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />)

/*
render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/