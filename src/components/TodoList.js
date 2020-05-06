import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filteredList = this.props.todos.filter((t) => {
      return t.task.toLowerCase().includes(this.props.searchTerm.toLowerCase());
    });

    return (
      <div>
        <h1 style={{ marginBottom: "1%", fontFamily: "Arial" }}>TODO</h1>
        <hr />
        {this.props.searchTerm.length === 0 ? (
          <List>
            {this.props.todos.map((t) => (
              <Todo todo={t} setTodo={this.props.setTodo} />
            ))}
          </List>
        ) : (
          <List>
            {filteredList.map((t) => (
              <Todo todo={t} setTodo={this.props.setTodo} />
            ))}
          </List>
        )}
      </div>
    );
  }
}

export default TodoList;
