# SkyPrice

## Introduction
SkyPrice is a single page web application.
It is developed in JavaScript with the React framework version 16.4.2. 
The mockup is available at src/img/assignment.jpg

## Code Design
Almost all components are functional components. 
Two main functional components are controlled by their respective containers:

Component | Container | Action Creator | Reducer | Description
--- | --- | --- | --- | ---
SearchLayout | SearchContainer | searchAction | searchReducer | Handle value change events to controlled inputs in the search form. A flight action is dispatched when submit button is clicked 
ResultLayout | ResultContainer | flightAction | flightReducer | Handle async fetch status change events when fetching data from API server. When sending a fetch request, search state is sent as URL parameters.

## Dependencies

Module | Description 
--- | ---
axios | Promise based HTTP client. It is used by SkyPrice to fetch data from mocky.io. axios provides cross-browser support
bootstrap | Twitter bootstrap help rapid UI prototyping and CSS grid system for responsive layout
moment | A library to parse, validate, manipulate, and display dates and times in JavaScript. Used to display custom date format such as '5th Aug 2018'
prop-types | React extension to typecheck React component props
react-input-range | HTML5 only support input range with one value. User requirements include a min-max range. This component helps with that requiremment
react-redux | A higher order component making use of React context API to insert Redux store as a prop to functional components
redux | Application state manager used to reducing actions into change of state
redux-thunk | Redux middleware to dispatch async actions such as REST API calls

## Installation

Install dependencies:

```npm install```

Run:

```npm start```


Build for production:

```npm run build```

Demo available at
https://jongthechemist.github.io/skyprice