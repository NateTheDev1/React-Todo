import React from "react";
import { ListItem, ListItemText, Card } from "@material-ui/core";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleClick = () => {
      this.props.setTodo(this.props.todo.id);
    };

    return (
      <Card
        style={{ marginTop: "2%", background: "#6d6d6d", color: "white" }}
        variant="outlined"
      >
        <ListItem style={{ textAlign: "center", marginTop: "2%" }}>
          <ListItemText
            onClick={handleClick}
            style={
              this.props.todo.completed === true
                ? { textDecoration: "line-through" }
                : null
            }
          >
            {this.props.todo.task}
          </ListItemText>
        </ListItem>
      </Card>
    );
  }
}

export default Todo;
