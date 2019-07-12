import React from 'react'
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import App from './App'
import Characters from './components/Characters';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('matches snapshot 2', () => {
    const trees = renderer.create(<Characters />).toJSON()
    expect(trees).toMatchSnapshot()
  });

  it('matches snapshot 3', () => {
    const trees = renderer.create(<Characters />).toJSON()
    expect(trees).toMatchSnapshot()
  });