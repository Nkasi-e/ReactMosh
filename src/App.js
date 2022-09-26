import "./App.css";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's start with react today</h1>
        <Counter />
        <Counter1 />
      </header>
    </div>
  );
}

export default App;
