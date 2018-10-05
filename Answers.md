# React Week 6 Sprint Challenge 

## Questions

1. What is React JS and what problems does it try and solve?

2. What does it mean to _think_ in react?

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

4. Describe state.

5. Describe props.

## Answers

1. React JS is an unopinionated JavaScript front-end library that excels at rendering user interfaces.  The problems it solves focus on applications in which large amounts of data interact with the user interface causing the need for it to selectively update, refresh, or in essence go from a static set of information to the "live-feed" we have become so accustomed to today.  Additionally, React is a good library choice for applications that can be compartmentalized into single functional units that either store and update data, manipulate data, or render data to create a user interface.  The best example to use in order to get a clear picture of where React excels would be FaceBook.  In fact, Facebook developers actually created React to handle and increase the efficiency of the types of interactions and data manipulations seen there.  In fact, it's quite amazing in reality, considering that only a decade ago updating and rendering certain parts of the DOM in real time without a full page reload and the concept of something like a live feed in Web 1.0 just didn't exist or existed as easily as it does today.

2. React has an approach that is compartmentalized, which essentially organizes functional units of code, each performing a specific role with respect to data storage, processes that operate on the data, and the creation of views by rendering that data for the user to interact and engage with.  Because of this, an approach to beginning a React project involves taking an entire application, and assessing its function and structure, and then breaking it down into functional components or sections - essentially individual user interfaces which will come together to form the complete user interface.  Often, you will see drafting and brainstorming examples showing boxes explicitly showing the components of a React application.  So, when on says to think in react, essentially it means to take the entire application and create individual functional components based on structure and function which will then serve as the basis for the components that will be coded.