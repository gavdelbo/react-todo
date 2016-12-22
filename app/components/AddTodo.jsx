const React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export const AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props
    var strTodo = this.refs.todo.value;
    if (strTodo.length > 0) {
      this.refs.todo.value = "";
      dispatch(actions.addTodo(strTodo));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container_footer">
        <form onSubmit={this.onSubmit} ref="form" className="todo-form">
          <div>
            <input type="text" placeholder="What do you need to do?" ref="todo" />
          </div>
          <div>
            <button className="button expanded" type="submit">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
