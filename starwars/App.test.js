import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './App';
import Characters from './src/components/Characters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matchesApp', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matchesCharacters', () => {
  const trees = renderer.create(<Characters />).toJSON();
  expect(trees).toMatchSnapshot();
});
