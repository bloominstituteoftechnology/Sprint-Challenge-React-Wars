import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

document.querySelector("body").classList.add("parallax");
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
