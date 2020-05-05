import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleClick = () => {
      this.props.setTodo(this.props.todo.id);
    };

    return (
      <div>
        <p
          onClick={handleClick}
          style={
            this.props.todo.completed === true
              ? { textDecoration: "line-through" }
              : null
          }
        >
          {this.props.todo.task}
        </p>
      </div>
    );
  }
}

export default Todo;
