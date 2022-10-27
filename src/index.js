// The index JS file will be the starting point of our React application. The code written in here will be the first code that will be executed in the browser when we load our project in the browser.

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// what we tell React with this line is that we want to render our custom <App /> HTML element, which is defined in the App.js file, into the place with the 'root' id '../public/index.html'
// if you inspect the browser, and look in Elements, then open the 'root' div, you will see HTML from the App.js file rendered there
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



