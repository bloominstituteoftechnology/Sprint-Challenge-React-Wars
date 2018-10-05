# Answers

1.    What is React JS and what problems does it try and solve?
React is not a framework. React an un-opinionated User Interface library which has a main purpose of building powerful applications. It allows you to use different JS libraries and gives you enough flexibility to build what you want without many restrictions.

Looking back in the last two weeks, I discovered how hard it is to manipulate the DOM. I also discovered that performance can depreciate if you had too many DOM operations in the background. I’ve always wondered how Software Developers built today’s complex websites with an abundance amount of data such as Facebook, Instagram, Twitter, AirBNB to name a few and still maintained such fast load time. React provides a way to offload all the data that these applications need to use from the DOM. It uses a Virtual DOM, which is a virtual representation of what the DOM will be, to update changes that will be made over time quickly. This makes applications exceedingly efficient and takes a ton of work off the DOM.

2.    What does it mean to think in react?
React is designed around the concept of reusable components. You define small components and you put them together to form bigger components.

3.    Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Stateful: Where everything lives. When it gets passed down, it’s called a prop.
Class: Acts like a function that receives props.
Functional: Concerned with how things work. Receives an object of properties which is usually named props but that function also considers a private internal state as additional input that controls the returned JSX.

Presentational: Concerned with how things look.

4    And 5: Describe state. Describe prop:
is an object that is owned by the component where it is declared. Its scope is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. When the state is passed out of the current scope, we refer to it as a prop.
