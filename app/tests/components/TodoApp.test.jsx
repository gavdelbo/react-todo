var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
//var TodoList = require('TodoList');
import TodoList from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);

  });

});
