**What is React JS? How does it differ from other JavaScript Frameworks?**

*First of all, React is a Library, not a Framework, for very specific reasons. The React library itself doesn't look to solve any structural or architechtural problems in an application -- it's completely structure agnostic. All it does is use a components-based idealogy to help break user interfaces down into reusable components that can be used all over websites. React doesn't care how you implement it or what you do with that power -- it's just there to help you do what you need to do. Frameworks tend to define entire application ecosystems.

As for how React is different than other JavaScript libraries, I don't think that it's too different than some of them, at a very high level. jQuery exists to modify the DOM easily and help developers create user interfaces. So does React, just better.

On a very micro-level, React differs from other libraries because it allows developers to split their user interface into little chunks that can be reused over and over again throughout an entire codebase. It brings the organizational and convenience benefits of JavaScript (i.e. functions and classes) into the usage of HTML.*

**Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.**

*The React Component Lifecycle is complicated and kind of difficult. To my understanding: things are instantiated inside the constructor, you set this.state and whatever other information you need in there. Afterwards, componentWillMount() can be used to call setState() and change props. Then we tend to use render(), ie actually show things on the screen. componentDidMount() gets called once in the lifecycle after rendering, and now code can be executed that requires the component to already be on the DOM.*

**Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.**



**Name the three arguments that are passed into the React.createElement() function?**
