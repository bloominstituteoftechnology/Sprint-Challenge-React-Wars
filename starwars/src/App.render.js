import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

itsNot('ok...Lol', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
