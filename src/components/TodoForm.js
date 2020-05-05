import React from "react";
import uuid from "react-uuid";
import { TextField, Button, Grid } from "@material-ui/core";
import "./TodoForm.css";

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
          <Button
            onClick={this.props.clearCompleted}
            variant="outlined"
            color="secondary"
          >
            Clear Completed
          </Button>
          <Grid container direction="row" justify="center" alignItems="center">
            <TextField
              type="text"
              name="task"
              label="New Task"
              variant="outlined"
              placeholder="Add a new task..."
              value={this.state.task}
              onChange={handleChange}
              className="form-text"
              size="small"
              margin="normal"
              fullWidth
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              margin="normal"
              classname="btn-submit"
              size="medium"
            >
              Add Todo
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default TodoForm;
