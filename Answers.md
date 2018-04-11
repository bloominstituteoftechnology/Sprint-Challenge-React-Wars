# Answers

#1. What is React JS? How does it differ from other JavaScript frameworks?#
`React is a JS library for building component based applications with efficient, dynamic user interfaces. Is different is that it requires an app install for an associated library to give access to a plethora of methods and funcitons to use in different component pages and tie together through different import/export scripts, to then finally 'render()' or launch application components.`

#2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.#

`Explain briefly the React Component Life-cycle. Name three of the methods that are a part of the life-cycle and what they do. The React Component Life Cycle move data rendered in the React App from a temporary working state consoled position to a deeper more temporary storage in the application. This allows for a record of data t be kept and updated when you close and restart the application or refresh your screen.  ComponentWillMount is a method called to send or mount data to your dynamic setState location where it is staged and render() is called again and componentWillUnmount is called to move the data to its temporary storage location. ComponentWillUpdate is used to update this location as the data changes.`  

#3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.#
`Functional/Presentational components only pass in props which are simply a placeholder and cannot be updated. Class/Stateful components take in state protopyes. These are dynamic placeholders that can exist without content or can can continuously update as input data changes in the placeholder field. Super() is also needed here. `
