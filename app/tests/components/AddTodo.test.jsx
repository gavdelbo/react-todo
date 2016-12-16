var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should call onAddTodo if todo submitted', () => {
  var todoText = 'Test todo';
  var spy = expect.createSpy();
  var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(addTodo));

  addTodo.refs.todo.value = todoText;
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith(todoText);
  });
  it('should not call onAddTodo if invalid todo submitted', () => {
  var todoText = '';
  var spy = expect.createSpy();
  var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  var $el = $(ReactDOM.findDOMNode(addTodo));

  addTodo.refs.todo.value = todoText;
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
  });
});
