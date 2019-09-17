import React from 'react';
import renderer from 'react-test-renderer';
import StarWarsChar from "../components/StarWarsChar";

describe('<App />', () => {
    it('should match snapshot', () => {
      let props = {
          name: 'Manju'
      }  
      const tree = renderer.create(<StarWarsChar char={props}/>).toJSON();
  
      expect(tree).toMatchSnapshot();
    });
  })