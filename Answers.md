# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

   React JS is a JS library that more or less gets out of your way. By that I mean it mostly lets you write code how you want to write code
   and especially it allows your to harness the power of JavaScript. React is generally considered the View in the MVC pattern. The main problem
   it solves is the UI. React helps make presenting and updating the UI state fast and seamless. It also helps keep code modular because it encourages
   a code writing style based around components.

1. What does it mean to think in react?

   This idea is referring to the 'big' concepts that React is a proponent of. Firstly, the UI and corresponding code base should be modularized.  
   That is, break everything down as much as possible into single components. Next, it is necessary to think of the minimal, but sufficient amount
   of 'state' that is required for the App. Incorporate this state into the App through a hierarchy. The state and data should flow top-down. Lastly,
   we want to ensure updates of the state are rippled down through the App, and this requires sending functions or callbacks to the corresponding component
   that will update the state.

1. Describe state.

   Both state and props hold information that changes how the UI is presented. However, state is the place that should be used if the component ever needs
   to alter it.

1. Describe props.

   Continuing from above, props is the place that should be used as the component's configuration. Props are immutable from the component's perspective.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

   Side effects are anything that affect something outside the scope of the function being executed. Currently, the best way to sync effects in a React component
   upon state or prop change is using the 'useEffect()' hook. This is so because this 'useEffect()' function, if notified, will trigger everytime a change to state or props
   occurs.
