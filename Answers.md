## Answers

1. React isn't a framwork, it's a client side rendering library. But it is unique in how it has a virtual DOM that performs operations behind the scenes and only uses/updates the actual DOM when a change was made that needs to be rendered.

2. I don't understand it well enough to explain it. But three methods are `componentWillUpdate`, `render`, componentDidUpdate.
- `componentWillUpdate` does things that need to be done before the next update happens.
- `render` returns the react markup.
- `componentDidUpdate`: I believe that this function checks if any thing has changed that needs to be reflected in the DOM

3. A statefull component will store data/state. A functional component performs a operation on data it receives and returns the results.

4. type, [props], [...children]