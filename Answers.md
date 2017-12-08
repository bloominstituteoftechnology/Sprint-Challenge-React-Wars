## Questions

1. What is React JS? How does it differ from other JavaScript Frameworks? React
   is a Javacript Node framework that let you build the front-end of websites by
   breaking it up into reusable components. You can use if for both React
   differs from other frameworks in that it works by change a virtual dom first
   to setup page changes then pushes only what has change to the real dom,
   instead of a total page recreation(refreshing) every time. It does this by
   using jsx, which can combine html, css, and js to build a complete component

2. Explain briefly the React Component Lifecycle. Name three of the methods that
   are a part of the lifecycle and what they do. React component lifecycle are
   the stage of interaction with a component, starting with just before it
   mounts (componentWillMount) to the dom until right before component is
   removed from the dom (componentWillUnmount).

* componentWillMount is used to set default setting, however reactjs.org
  recommends using the constructor()
* componentDidMount() load data, apis, needed for the component
* render() is the only one of the lifecycles called more than once. It is what
  is the visual output of the component

3. Briefly describe some of the differences between a `Class/Stateful component`
   and a `Functional/Presentational component`.

* `Class/Stateful component` - something about the component can change or have
  some inter-action with them when it is first rendered. When it changes the
  component will be re-rendered. Examples button being click and forms being
  submit. +`Functional/Presentational component - nothing about the component
  will change once it is rendered. Example: most of the text on a 'about me'
  page will not change or need to be re-rendered

4. Name the three arguments that are passed into the `React.createElement()`
   function?

* type, [props], [...children]
