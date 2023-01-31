import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const stateArray = useState("pig");
  const animal = stateArray[0];
  const setAnimal = stateArray[1];
  console.log("rerender");
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log("updated title");
  }, [animal]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Monkey <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {animal} React {count}
        </a>
        <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setAnimal("Donkey")}>
        Click me
      </button>
      </header>
    </div>
  );
}

export default App;
