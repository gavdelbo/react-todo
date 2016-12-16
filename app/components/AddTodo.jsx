const React = require('react');

const AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strTodo = this.refs.todo.value;
    if (strTodo.length > 0) {
      this.refs.todo.value = "";
      this.props.onAddTodo(strTodo);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div>
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

module.exports = AddTodo;
