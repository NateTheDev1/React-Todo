import React from "react";
import uuid from "react-uuid";
import { TextField, Button, Grid, Paper, Divider } from "@material-ui/core";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: uuid(),
      completed: false,
      search: "",
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

    const handleSearch = (e) => {
      e.preventDefault();
      this.props.handleSearch(this.state.search);
    };

    const handleClearSearch = () => {
      this.props.handleSearch("");
      this.setState({ search: "" });
    };

    return (
      <div className="TodoForm">
        <Paper elevation={3} style={{ padding: "2%", boxSizing: "border-box" }}>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <TextField
                type="text"
                name="search"
                label="Search"
                variant="outlined"
                placeholder="Add a new task..."
                value={this.state.search}
                onChange={handleChange}
                className="form-text"
                size="small"
                margin="normal"
                fullWidth
                style={{ marginTop: "5%" }}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={handleSearch}
                margin="normal"
                classname="btn-submit"
                size="medium"
                style={{ marginBottom: "3%" }}
              >
                Search
              </Button>
            </Grid>
          </form>
          {this.state.search.length > 0 ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClearSearch}
              margin="normal"
              classname="btn-submit"
              size="medium"
            >
              Clear Search
            </Button>
          ) : null}
          <Button
            onClick={this.props.clearCompleted}
            variant="outlined"
            color="secondary"
          >
            Clear Completed
          </Button>
        </Paper>
      </div>
    );
  }
}

export default TodoForm;
