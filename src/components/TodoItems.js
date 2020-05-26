import React from "react";
import PropTypes from "prop-types";

class TodoItems extends React.Component {
  getStyle = () => {
    /*  if (this.props.todo.completed) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    } */
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  /* markComplete = () => {
    console.log("from todoItem");
  }; */

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteRow.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
/* render() {
    return <p style={this.getStyle()>{this.props.todo.title}</p>;
  } */

TodoItems.propType = {
  todo: PropTypes.object.isRequired
};

export default TodoItems;
