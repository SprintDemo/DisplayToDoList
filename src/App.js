import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Axios from "axios";

class App extends React.Component {
  state = {
    todos: [
      /* {
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
      } */
    ]
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=10").then(
      res => this.setState({ todos: res.data })
    );
  }

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
    Axios.delete("https://jsonplaceholder.typicode.com/todos/$(id)").then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    /*  console.log(this.state.todos.length);
    const todoItem = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }; */
    const todoItem = {
      title: title,
      completed: false
    };
    Axios.post("https://jsonplaceholder.typicode.com/todos/", todoItem).then(
      res => this.setState({ todos: [...this.state.todos, res.data] })
    );
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
