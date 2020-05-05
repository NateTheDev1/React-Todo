import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  render() {
    const handleTodo = (todo) => {
      this.setState({ todos: [...this.state.todos, todo] });
    };

    const setTodo = (id) => {
      this.setState((prevState) => {
        return {
          todos: prevState.todos.map((todo) => {
            if (todo.id === id) {
              return {
                task: todo.task,
                id: todo.id,
                completed: !todo.completed,
              };
            } else {
              return todo;
            }
          }),
        };
      });
    };

    const clearCompleted = () => {
      this.setState((prevState) => {
        return {
          todos: prevState.todos.filter((todo) => {
            return todo.completed !== true;
          }),
        };
      });
    };

    return (
      <div>
        <TodoList todos={this.state.todos} setTodo={setTodo} />
        <TodoForm handleTodo={handleTodo} clearCompleted={clearCompleted} />
      </div>
    );
  }
}

export default App;
