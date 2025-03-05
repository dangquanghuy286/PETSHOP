import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from "react-redux";

// Tạo store Redux với tất cả các reducers
const store = createStore(allReducers);

// Render ứng dụng React trong DOM với root là 'root'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
