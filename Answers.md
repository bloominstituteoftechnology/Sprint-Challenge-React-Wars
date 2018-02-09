[X] ## Start by forking and cloning this repository.
## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
React JS is a framework created by Facebook engineers that is optimized for single page applications (like Facebook).  It features a virtual DOM and simplifies writing HTML by using a language called JSX.  JSX looks very close to Javascript but is not.  However, JSX allows developers to generate HTML dynamically at runtime by using a familiar syntax.

React is component-based (i.e. modular) in that components can encapsulate both logic and data.  In React's syntax data is referred to as 'state'.  States are contained within the component itself to avoid binding issues with 'this'.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
A function component acts on a single element.  A class component can act on a collection of data (states?).
A constructor component ...?

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
A Class/Stateful component
???
whereas a Functional/Presentational component
???

## Project
* You're going to be building an application *starwars* that consumes live data that we're retrieving across the world wide web!
1. **cd into starwars** and run `npm install` to retrieve all the needed dependancies. 
2. Once you have installed all the _node_modules_ you should be able to run `npm start` to get your server up and running.
3. Once your server is up and running open Chrome and head over to `localhost:3000` to see your beautiful app. Ok, maybe it's not THAT pretty yet, but it's your goal to ensure this project becomes a thing of beauty.

### If you notice inside of `App.js` we're calling an open sourced **API** from within `componentDidMount()` and saving the results of that API on state. 
#### Open up your chrome `React Dev Tools` to peek at the data set on `state` of your `App` component. 
* You should see something like this:

![Star Wars state data](starwars_data.png)

* Your goal here is to build an app that displays the data provided in whatever way you see fit! Don't worry about the fields whose values are URLs. You'll figure out what to do with data like that later on in the course. 
* For now, just build a react app that displays this fun Star Wars data. Build a card for each object and style it to make it nice and fancy. 
