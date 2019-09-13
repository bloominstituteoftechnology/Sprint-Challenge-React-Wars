import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

describe("<App />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("<App />", () => {
    it("should match snapshot", () => {
      const tree = (
        <div className="App">
          <h1>React Wars</h1>
          <h1>React Wars - Star Wars</h1>
        </div>
      );
  
      expect(tree).toMatchSnapshot();
    });
  });