import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todos.map((t) => (
          <Todo todo={t} setTodo={this.props.setTodo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
