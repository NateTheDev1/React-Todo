import React from "react";
import uuid from "react-uuid";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: uuid(),
      completed: false,
    };
  }

  render() {
    const handleChange = (e) => {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.handleTodo(this.state);
      this.setState({ task: "", id: uuid(), completed: false });
    };

    return (
      <div className="TodoForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add a new task..."
            value={this.state.task}
            onChange={handleChange}
          />
          <button>Add Todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
