import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.querySelector("body").classList.add("parallax");
ReactDOM.render(<App />, document.getElementById('root'));
