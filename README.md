# Sprint Challenge: React - Star Wars

This was worked on by Ryan Mersmann

## Self-Study/Essay Questions

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React is a Javascript Library library developed by Facebook. It solveds the problem of the complexity of large applications that require many components. This is important when the data is changing all the time like posts on Reddit for example.

- [ ] What does it mean to _think_ in react?

- Thinking in React requires you to think in terns of components. For example you have a header, body and footer component. inside each component, you can nest another one, resulting in hhieracrchies. YOu can look at a webpage and realize that navs, links, search bars, logos and cards are part of component structure.

- [ ] Describe state.

- State is an object that represent the parts of the app that can be changed or change. For example, counters, or inputs like forms, etc.

- [ ] Describe props.

- Props are properties inside a component and can be used for passing data from one component to another.

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side Effects are anything that affects something outside the scope of the function being executed. Side effect is like jotting what you are thinking into paper.

## Project Set Up

Follow these steps to set up and work on your project:

- [done] Create a forked copy of this project.
- [done] Add TL as collaborator on Github.
- [done] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [done] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [done] Change directories into `./starwars` (`cd starwars`) and run `npm install` to retrieve all needed dependencies.
- [done] Once you have installed the _node_modules_, run `npm start` to get your server up and running.
- [done] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [done] Implement the project on this Branch, **committing progress & changes often.**
- [done] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [done] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [done] Add your Project Manager as a Reviewer on the Pull-request.
- [done] TL then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [done] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [done] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [done] Set the data you fetch to state.
- [done] Map over the list and render a component for each character on the page.
- [done] You must display at least one element for each star wars character in the data set.
- [done] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

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
