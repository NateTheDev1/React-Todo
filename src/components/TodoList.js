import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.todos.map((t) => (
          <Todo todo={t} setTodo={this.props.setTodo} />
        ))}
      </List>
    );
  }
}

export default TodoList;
