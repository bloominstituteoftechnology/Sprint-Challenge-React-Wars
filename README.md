## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    - React JS is a library for JavaScript and it solves the problem that teams of developers face when it comes to putting together each developer's code efficiently. React revolves around creating components, which are like building blocks of the application. Their ability to pass down props improves their reusability and their versatility when plugging into other components. React has a process that allows it to rerender based on the change of state (a variable essentially), and it will reach out to the specific node that is affected by the change and then rerenders it. This rerender is only affects the component that is affected by the change of state and therefore, react is not only a coding paradigm that is easy to assemble in a team, it is also a performant library that could improve user's experience.
- [ ] What does it mean to _think_ in react?
    - Coding in react requires a different thought process when it comes to coding with it. You have to think of each feature and part of a web app as an assembly of components all housed by the main component (App in most cases). And each of those components could be even smaller components. You would continually build components to make components until you get to the most simple feature. Doing so would allow you to build out the app to be scalable because the components will have reusability and it will abstract all the relevant code within each component.

- [ ] Describe state.
    - State is basically a variable specific to the component it is declared it. The react component would watch the state carefully and would rerender if the state is involved in triggering changes in the virtual dom. State cannot be directly mutated via "=" assignment.
- [ ] Describe props.
    -   Props are values that are passed down from parent component to child component. They are passed down by assigning attributes of child components with the value from the parent component. This feature highlights a react way of thinking where data flow is unidirectional (goes one way, top to bottom).
- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?
    - Side effects is the react hooks version of life component cycle. THis allows developers to perform tasks that is out of the class scope such as window events (timers, eventlisteners), or API calls. Side effects are triggered once on load after the page renders completely, and could trigger again on change (depends on what is passed into the second args array). Side effects could also cleanup accumulation of objects and listeners by declaring a return with a function call within the useEffect function.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] TL then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [ ] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [ ] Set the data you fetch to state.
- [ ] Map over the list and render a component for each character on the page.
- [ ] You must display at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems
- [ ] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters. 

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
