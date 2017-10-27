# Answers #
1. React is a JavaScript library which is developed by Facebook. Nowadays, it is the most commonly used library having the large community and strong foundation behind it. Furthermore, ReactJS is used to create refillable UI components.
* React is all about the view, it doesn't focus on the data or the controllers. Rather, it is simply focused on the view and how a given interface is connected to those other elements. Thus, what makes React different from other frameworks is that is completely concerned about the DOM.

2. React Component Lifecycle has a lifecycle method that enables the developer to develop an application with good quality and makes sure that the developer can really design about what and how to manipulate at various points of UI interfaces.The React Component Lifecycle has four phases such as,
    * **Initialization**
    * **Mounting**
    * **Updation**
    * **Unmounting**
The three methods that are parts of the lifecycle are described as follows:
  * **getInitialState:** a method which is accessible inside the component and allows us to set the initial state value.
  * **shouldComponentUpdate:** is a method used to define if a re-rendering is needed or can be skipped. Moreover, it is never called on the initial rendering and must return the boolean value.
  * **componentWillReceiveProps:** is a method that enables us to update the state depending on upcoming and existing props. It is only called whenever the props have changed and when it is not an initial rendering.
  3. 
  * The *Class/Stateful* components are basically dealt with the logic where as, *Presentational/Stateless* components are only focused on the UI rather than the behavior.
4. Three arguments that are passed in to the `React.createElement()` function     are `(type, [props],[...children])`.