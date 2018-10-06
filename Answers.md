# Answers

1.  What is React JS and what problems does it try and solve?

React solves performance issues by creating a virtual DOM that allows the page to handle 
click events, hover, new postings etc in a separate virtual DOM that then compares to the 
current DOM and only changes the differences without having to refresh the rest of the content.
React also focuses heavily on components which are reusable code that can then be used in 
other parts of the website or app if needed.

2.  What does it mean to _think_ in react?

To think in react means to break down the application you're trying to build into
smaller components then build them seperatly then add them back up at the end.
Example would be the calculator app or the twitter card.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

You're class component should hold your main content like the functions and your state
while the presentational components should hold you're JSX DOM elements. It's best
practice to seperate anything purely presentational from the parts that actually handle
the logic behind the user interaction.

4.  Describe state.

State is managed within the component and contains the 'heart' of the app
Everything in state can and most likely will be mutated by user events.

5.  Describe props.

props are immutable and are passed down through the components. They usually contain
the information on how a click event should be handled or how something should act
within the app.
