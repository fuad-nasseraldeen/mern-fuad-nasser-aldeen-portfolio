import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as reveal from './Layouts/Reveal';
import { ScrollToTop } from './Layouts/ScrollToTop';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducers/profile.js';
const store = configureStore({
  reducer: rootReducer,
});

window.addEventListener('scroll', reveal.reveal);
window.addEventListener('scroll', reveal.revealFromLeft);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <ScrollToTop />
  </Provider>,
);
