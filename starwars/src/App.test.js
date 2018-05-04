import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import results from './starWarsPersons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
