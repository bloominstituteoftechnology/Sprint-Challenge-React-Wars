# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React is a user interface component library that was build by Facebook, The original author/creator is Jordan Walke.  It's purpose is to solve and manage all the data without running down the DOM or the web browser.  Instead of running with the DOM, React instead created a "virtual representation" of what the DOM would be like, then the HTML elements will be given to the engine or the virtual version, and React will take that code that's given and compile it onto the screen.  This is call reconciliation, which means React detects that/if the state of the app has changed.  

2. Describe component state.

    - Component State is a JavaScript object that  is managed within a component.  Similar to variables.  The state is where you would store property/values.  

3. Describe props.

    -Props are plain JavaScript objects that are passed onto the component. And, they are passed to the React component from the HTML

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    - A side effect is something that is affected by outside objects.  One example of a side effect would be calling data. Or another example,  manually changing data.  In React, there are several side effects.   synching, in React takes the DOM according to the state.  