import "./App.css";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

function App() {
  const counters = [
    { id: 1, count: 4 },
    { id: 2, count: 5 },
    { id: 3, count: -5 },
    { id: 4, count: 0 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {counters.map((counter) => (
          <Counter key={counter.id} count={counter.count} />
        ))}

        <Counter1 />
      </header>
    </div>
  );
}

export default App;
