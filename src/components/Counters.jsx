import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onDecrease, onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            counter={item}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
