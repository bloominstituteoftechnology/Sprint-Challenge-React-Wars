# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
    <p>React JS is a JavaScript framework that takes advantage of reusable pieces of UI called components and a uni-directional flow of data. Components are made of JS classes and gives developers the power to write UI with both JS and HTML. React differs from other JS frameworks in that it uses a Virtual DOM to store a version of the DOM and only updates nodes that have changed. Therefore React is best used in applications that have many costly DOM operations. React can also make changes to different areas of a app without refreshing the page.</p>

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    <p>The React Component Lifecycle describes particular moments in a components life which includes: a mounting point, an update point, an unmouting point, and an error point. React includes methods to run code at each of these lifecycle moments. </p>

    <p>One important method is the render method which is called when a component is mounted and when setState() is used. Render outputs the JSX within a component at those times. Another important method is the constructor() which calls the constructor of the parent class and allows it to initialize. Constructors are important because they are the only place within components to set or change state. ComponentdidMount() is another lifecycle method that is called after the initial render. When this method is called, it signals that all components and their children have rendered properly. Developer often use this method to fetch data from an outside source.</p>

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    