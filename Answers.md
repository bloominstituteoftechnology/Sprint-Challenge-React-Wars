# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

ReactJS is a JS library that let splitting a web page into components allowing handling complicated UI. In such way, updating necessary components becomes more efficient and bundle all our assets in a single file/files that are going to be imported in HTML file. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

React components go through certain phases such as "Render Phase", "Pre-Commit Phase", and "Commit Phase". Each of these phases includes methods that invoked in particular order. These methods are involved in the process called the React Component Lifecycle. 
Those Methods are: 
Mounting which can have constructor (setting inheritance, setStates). 
Render is always there for extending base class. After render gets called DOM references are going to be updated.
ComponentDidMount - if setState is called here it calls render again.


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional Components are just JS functions that take an optional input (props)
Class Components/Stateful Components are different from Functional Components as they can have 'state'.  