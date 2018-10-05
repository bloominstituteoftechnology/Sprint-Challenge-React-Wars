# Answers

1.  What is React JS and what problems does it try and solve?
    
    React JS is a JavaScript library which tries to solve the problems of dealing with a large amount of changing data and displaying that data without stressing the DOM too much. React solves this problem via the virtual DOM.

2.  What does it mean to _think_ in react?

    Thinking in React means first breaking an idea or design file down into components, then figuring out how data (state) should be passed through these components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A stateful component's main purpose is to hold and pass data and a presentational component's main purpose is to display that data. Components should be built to do one thing really well, so creating this difference in components helps create a separation of concerns. Stateful components manage how things work, presentational components manage how things look.

4.  Describe state.

    State is data which stateful components hold and presentational components present (via props). State is mutable via this.setState() and can be changed as needed, which causes the data to re-render.

5.  Describe props.

    Props (properties) is read-only data presented by presentational components. Those components are passed this data via state. Props are immutable as they only need to change when presented new data from state.