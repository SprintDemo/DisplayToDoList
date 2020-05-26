import React from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

class Todos extends React.Component {
  /* markComplete = () => {
    console.log("from todos");
  }; */

  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteRow={this.props.deleteRow}
      />
    ));
  }
}

/* class Todos extends React.Component {
  render() {
    return (<h 1>Todos</h1>);
  }
} */

Todos.propType = {
  todos: PropTypes.array.isRequired
};

export default Todos;
