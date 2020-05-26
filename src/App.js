import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take it to Trash",
        completed: false
      },
      {
        id: 2,
        title: "Take it to Trash1",
        completed: true
      },
      {
        id: 3,
        title: "Take it to Trash2",
        completed: false
      }
    ]
  };

  markComplete = id => {
    console.log("from App" + id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteRow = id => {
    console.log("In deleteRow");
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    console.log(this.state.todos.length);
    const todoItem = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, todoItem] });
  };
  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    key={this.state.todos.id}
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteRow={this.deleteRow}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
