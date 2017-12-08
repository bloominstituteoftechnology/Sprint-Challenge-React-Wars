1. What is React JS? How does it differ from other JavaScript Frameworks?

React is mainly the view layer. It's a Javascript library for building interfaces. Gives template language and some function hooks to render HTML.

Other JS frameworks are complete frameworks. React is not. You can't build fully functional dynamic app with just React. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

willMount ->  didMount -> willReceiveProps -> shouldUpdate -> willUpdate -> render -> didUpdate-> willUnmount 

willMount - default position. app config in root component. 
didMount - mounted component, load data for component, can call setState
willReceiveProps - when new props arrive, this is called before the component does anything with the props, trigger state transitions. can setState
.shouldUpdate - new props, now component asks for permission here, controls exactly when component will render . "only update if the props you care about change."
willUpdate - functionally same as willreceiveprops, can't this.setState here
render. "Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props)."
didUpdate- update DOM in response to prop or state change. 
willUnmount - clean up involving the component

3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

Class/Stateful component
how things work
can have both functional & class components inside, no DOM markup, no styles
provide data & behavior to other components
call flux & callbacks to presentational component
Stateful- data sources
generated with higher order components like createContainer()
ex UserPage, FollowersSidebar

Functional/Presentational component
how things look / app's palette. Can tweak without touching app's logic
can have both functional & class components inside - some DOM markup, styles
this.props.children
no dependencies on rest of app
don't specify how data is loaded 
receive data/callbacks through props
rarely have own state
ex.Page, Sidebar

4. Name the three arguments that are passed into the `React.createElement()` function?
component, props, children
