## What is ReactJS?
`React is a declarative, efficient, and flexible JavaScript library for building user interfaces.` That means it is:
+ a: meant to assist in the design of interactive web apps and websites
+ b: high performance enough to run major services like Facebook, Instagram, and WhatsApp.
In extreme cases, it can be used to create a Single Page App which has elements of JS, HTML, and CSS all in one file which gets pushed to the user device when they access, for example, a specific URL. 

#### How does it differ from other JS Frameworks?
+ a: It was developed primarily by Facebook engineers, whereas Angular was developed at Google. The difference in approaches to various issues can be significant. Another competitor in the space is Vue, created by a former Googler and now supported by a Patreon account and other revenue streams.
+ b: React focuses on using ES6, Angular focuses on TypeScript, and Vue works with ES5 or ES6. 
+ c: If you need stricter _typing_ in React, you can use Flow.
+ d: React _crosses the streams_ by mixing JSX and HTML in the same file ([and some people think that old "Best Practices" should be reexamined.](https://www.youtube.com/watch?v=x7cQ3mrcKaY) ). Angular has a syntax all it's own in addition to HTML, CSS, and TypeScript. And Vue features "single-file-components" with HTML, JS, and CSS all in separate sections within each file.

## The React Component Lifecycle
Three of the methods that are a part of the lifecycle are:
1. `constructor()` is a _Mounting_ method. It creates an instance of a component, such as a post on an instagram feed.
2. `render()` can be a _Mounting_ or _Updating_ method. If a component is being re-rendered due to a change in state or props, it is updating.
3. `componentDidCatch()` is a method used for _Error Handling_. It is called to facilitate debugging.

## Various components in ReactJS
1. Class / Stateful Components
  +  Class components can be stateful or stateless, but usually they're used as stateful
  + Class components use 'super()` in the constructor function to pass down whatever is inherited from the parent class to the new class being created.
  + All stateful components are class components. 
  + Anything "In State" is practically immutable. It can only be updated using `setState()`
2. Functional / Presentational Components
  + Presentational component make things pretty.
  + Presentational components should not do any "lifting" - heavy or otherwise. Any interactivity with the user (such as responding to a button click) should be done by sending props to a callback in a Functional component or Class component.

## The Three Arguments passed into `React.createElement()`
1. type (required)
2. props (optional, but very often needed)
3. children (optional)

#### Final Comments
This took a lot of research. Should I be referencing my sources here? Regardless, I'll be doing more reading from now on. 