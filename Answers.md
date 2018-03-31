# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?
JSX, that is it. JSX allows me to 'combine' JS and HTML into one coding element that allows me to
display its content via web. At least for me that's what I believe is the difference.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
The lifecycle is the process in which React goes through to loop through the ReactJS code and display it on the screen.
React will check if something is mounted, if not, then mount it, then update, then render.
It first starts with Render, it will render everything that was given to it, then after it render it will look to see if
any of it's content is updated, and if it is updated, it will check to see if it's state needs to be mounted (data given).
If the state needs to be mounted it will mount the data into the state, and when it mounts it will give us access to its prop values, then render again. There are more steps but this is what I know thusfar.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
If your component just wants to pass static data and nothing more, then we can use a normal ```const foo () => {} ``` etc. Otherwise, if you will be passing data dynamically throughout differeing components you will then need access to the ```this``` keyword and ```props```, then it will be
better to use a class. A.K.A if you need access to lifecycle methods, use a class, if not, then you don't need to use a class.


4. Briefly describe PropTypes and what we use them for when building react applications.
Proptypes are literally just that. Type of prop used. If you're using a ```string``` type for one variable, and a ```integer``` type for another.
You can immediately define that proptype and have the code expect that variable to be that specific type. It makes developing easier, because then
you won't have to fumble about trying to figure out what you need to return, if you know you have to return a ```string``` type, then you can focus
on coding to manipulate values to become a ```string``` type.