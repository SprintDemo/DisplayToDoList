import React from "react";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  addTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //add todo on submit
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todos..."
          value={this.state.title}
          onChange={this.addTodo}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
