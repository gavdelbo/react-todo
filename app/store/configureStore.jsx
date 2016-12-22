const redux = require('redux');
const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');
// const thunk = require('thunk');
export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
  //redux.applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

return store;
};
