# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React is a user interface component library, and ti's solve and manage all the data without running down the DOM or the web browser.  The HTML components will be given to the search engine, the virtual DOM, and then react will take it, and it will show on your screen after it's compiled. After, the DOM is updated and it takes notes of what has been changed, thus taking strain off the browser, making all smooth.

- [x] What does it mean to _think_ in react?

    - 1) Once you have hierarchy, after breaking down the UI, make sure every component and subcomponent have a drawn box,. Then, you would use the "single responsibility component, which should only be in charge of one thing. 

      2) nEXT, You will want to include a static version, and add components to reuse other compnents and pass data threw, the app using "props".  Now, state is reserved so that it is interactive, meaning you can build it top-to-bottom OR bottom-to-top.  
      3) Next, you'll want to identify the representation of the UI state, and you can make it interactive by changes triggered by the underlying data. 
      4) Now, you will want to idetify where the sates live.  Look at each component or it's own state. 
      5) Lastly, add inverse daata flow. 


- [x] Describe state.

    - A state is plain JavaScript, and it's managed with the component, it's kind of like variables that are declared into a function. And, states are the object that represents the part of the app that changes. 

- [x] Describe props.

    - The Props are also plain Javascrot, that are passed threw componests, but it's equivlant to the function parameters.  Props are just arguments passes within the React components threw the HTML

- [x] What are side effects, and how do you sync effects in a React component to state or prop changes?

    - 1) The side effect is anything the would affect something, outside of the scope, and functions.  An example of a side effect would be it retreaving data from the API, and manually ajusting the DOM

    2) THere would be 2 main side effects in React, first, the side effect that would be ones that need clean up, and the other ones that wouldn't.  yOU Would need to use a hook, to find and preform the side effets in the functions componensts. 

    3) And React syncing to the DOM wed use our current proprs and statesl  it would be similat to the usEffect.  And this lets use syncrhtonise things to the outside of React.  The only updates parts will the the changed ones, and using dependency  in the effect hook, will allow each state or prop to be effected, and synced with. 


## Project Set Up

Follow these steps to set up and work on your project:

<!-- - [x] Create a forked copy of this project. -->
<!-- - [x] Add TL as collaborator on Github. -->
<!-- - [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)** -->
<!-- - [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`. -->
<!-- - [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies. -->
<!-- - [x] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running. -->
<!-- - [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty. -->
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
<!-- - [x] Push commits: `git push origin <firstName-lastName>`. -->

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
<!-- - [x] Add your Project Manager as a Reviewer on the Pull-request. -->
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
