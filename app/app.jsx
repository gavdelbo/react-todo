var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

const actions = require('actions')
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Go to the gym'));
store.dispatch(actions.setSearchText('gym'));
store.dispatch(actions.toggleShowCompleted());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
