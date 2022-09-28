import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Incremet button fn

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //Reset button fn
  handleReset = () => {
    const counters = this.state.counters.map((count) => {
      count.value = 0;
      return count;
    });
    this.setState({ counters });
  };

  //delete fn
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (count) => count.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <header className="App-header">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </header>
      </div>
    );
  }
}

// function App() {

// }

export default App;
