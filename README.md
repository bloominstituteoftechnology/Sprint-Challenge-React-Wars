# Assessing your React Learning
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about ReactJS.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

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
