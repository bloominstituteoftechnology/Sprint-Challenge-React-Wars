# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Functional Components and Class Components. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is React JS and what problems does it try to solve? Support your answer with concepts introduced in class and from your personal research on the web.

  ReactJS is a library for JavaScript created by software engineers at FaceBook. It's primary purpose is to aid in programming and maintaining web apps that must process and render large amounts of data coming from numerous disparate sources. Facebook itself must manage content feeds, comments, likes, links, status updates, advertisements, and tracking lots of user behavior (apparently). Changes in any of these components could come from numerous places on the web, different versions of the Facebook phone app, Instagram, Facebook itself, etc. ReactJS provides a framework and a paradigm for managing all that data and rendering just the changes, which it tracks by diffing the browser's DOM and its own virtual DOM (a process called reconciliation). Like any library, React cannot actually make JavaScript do anything that JavaScript cannot do on its own. Practically speaking, however, React helps so much with speed and efficiency that some apps and pages would be very, very difficult to write and maintain without it.

- [ ] What does it mean to _think_ in react?

  As mentioned above, React is designed to intake and display lots of data very quickly. React provides the tools for developers to make this happen, but the developer must employ those tools properly–that is, React developers must learn to think in React. Roughly, thinking in React means:

  - Reusable components: A component with an input field and a button might be reusable, but it’s not as versatile as an input field component and a button component separately.

  - Single-task components: A component with one job is more likely to be reusable, and it’s also easier to comprehend. Good readability makes a component easier to debug, as well as to pass on to other developers.

  - Minimize state: Identify the minimum (but complete) set of mutable data you’ll need to for your project to run. Don’t store data in state that could be calculated from the state you’re already storing. For example, if you stored an array of grocery items in state that included each item’s type (fruit, vegetable, grain) and color (red, green, brown), you would not want to store a boolean tracking whether each item was a red fruit or not—that can be be calculated from the data already stored.

  - Lift up state: At a minimum, state should be stored on a component that is high enough in the component hierarchy that all components that need props delivered from that state are a descendant of the stateful component. I’m not sure if there are downsides to lifting state even higher, but it might be best to store state on or close to the highest level component (App.js in our projects so far).

  - Data flows downward from state by way of props: With state stored appropriately high up, props can open channels so data can now flow downward to any descendant components that need it. See answers 3 and 4 for more detail.

* [ ] Describe state.

  State is a vanilla JS object that is defined within a React Class component. The state object is special in react, however, because it allows data to be stored and changed over time (though not by mutation, as I understand it...). Any update to state triggers the render() method (found on all class components in React) which displays any visible state-changes to the user. Importantly, state-changes are batched and are asynchronous, so care must be taken when attempting to make calculations based on data stored in state. Finally, React apps are easier to write, debug, and manage when state is “lifted up” to the appropriate level. To use an example based on a React tutorial, let’s say we’re writing a chess game in React. Each piece and the board itself could all be components (along with a display and a few other components). One might think to store a piece’s board position within the piece itself, but in React this is short-sighted. If each piece’s position is stored in the board component, then the board component will be ready to evaluate when one piece captures another, and when the game is over. The pieces can have their position passed down to them as props.

- [ ] Describe props.

  Like state, props are each a vanilla JS object. In the React paradigm, they are the means by which information flows downward from a stateful component to its (generally) stateless children. While state can be updated with changes in data, props are entirely immutable. In the chess example above, each piece’s position is passed down from the stateful board component to each stateless piece—but there’s no good reason to stop with position. The color and type of each piece could also be passed down, as well an “in-play” boolean property that is set to false when a piece is captured. The props I’ve described so far have been simple values, but functions can also be passed down (and they must be if one is to use React at its full strength). For example, a movement function could be passed down to each piece so that the board component’s state is properly updated when a piece is moved. The fact that props are immutable helps us understand what data is being changed, and where. The piece does not and cannot update its own position. Rather, it carries a function (delivered by props through every component between the piece component and the board component) that updates the board’s state regarding that piece’s position. This state change then triggers a render which will send the new piece position to the piece (again, through props) and React will redraw only the pixels needed to show the piece travel to its new position.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start or` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
      Follow these steps for completing your project.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by merging the branch back into master.

Please note:

- `componentDidMount()` calls an open sourced API inside of `App.js` and saves the results of that API on state.
- Upon opening the `App.js` file you'll see that there is code written out that looks like this:

```js
componentDidMount() {
  this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};
```

- You don't need to understand what that code is doing fully, other than the fact that it is setting your state with Star Wars Character Data.
- View your `App` component's `state` by opening the Chrome `React Dev Tools` to peek at the data set. At this point you will know what to do from here.

Your data set will look like this:

![Star Wars state data](starwars_data.png)

- Based on knowledge gained over the past Sprint

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] A list of Star Wars Characters rendered to the screen.
- [ ] You must have at least one list element for each star wars character in the data set.
- [ ] The list elements must all be styled beyond the basic

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts to much and does not.

## Stretch Problems

- [ ] Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters`
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
