import React from 'react';
import renderer from 'react-test-renderer';

import CharacterList from '../views/CharacterList';

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CharacterList />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});