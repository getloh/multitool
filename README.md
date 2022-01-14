# Multitool

I initially started working on this multi-tool 'app' as a way to get used to React and Redux, it has since evolved slightly into just a sandbox environment for me to try/test/implement a variety of common use cases.

As time goes on, i'll document each feature and the relevant use case / background logic.


### ui
src/features/ui

A fairly standard navigation bar style element, sets a ui state, which is used by the main app to know what element to render.

### counter
src/features/counter

Every beginner React app needs a counter!
This one also has a multiplier function so you can count faster, it's also been used as a test ground for conditional rendering based on state - as the JSX can style differently based on the state.

### To-Do
src/features/todo

Another React staple,
I thought i'd experiment with adding some extra elements for additional conditional formatting, such as an 'urgent' property as well as the ability to mark as complete or remove the task after adding it.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

