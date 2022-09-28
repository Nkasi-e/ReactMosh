import React, { Component } from "react";
import "./App.css";
// import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};

  // Incremet button fn

  handleIncrement = (counter) => {};

  //Reset button fn
  handleReset = () => {};

  //delete fn
  handleDelete = (counterId) => {};

  render() {
    return (
      <div className="App">
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <header className="App-header">
          {/* <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
    />*/}
        </header>
      </div>
    );
  }
}

// function App() {

// }

export default App;
