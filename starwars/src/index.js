import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharCard from './CharCard';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} exact/>
            <Route path="/:name" component={CharCard} />
        </div>
    </Router>
    , document.getElementById('root'));
