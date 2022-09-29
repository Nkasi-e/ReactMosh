import React, { Component } from "react";

class Counter extends Component {
  state = {
    tag: [],
  };

  // Rendering style dynamically
  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  // Rendering Expression dynamically
  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? `Null` : `${value}`;
  }

  // Rendering classes dynamically
  getBatchClasses = () => {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : value <= 0 ? "danger" : "success";
    return classes;
  };

  // Updating state
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  // Rendering list
  // renderTag = () => {
  //   const { tag } = this.state;
  //   if (tag.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {tag.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  render() {
    return (
      <div>
        <h1 style={this.styles} className={this.getBatchClasses()}>
          {this.formatValue()}
        </h1>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>

        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm"
          disabled={this.props.counter.value <= 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>

        {/* {this.state.tag.length === 0 && `Please create a new tag`}
    <h4>{this.renderTag()}</h4>*/}
      </div>
    );
  }
}

export default Counter;
