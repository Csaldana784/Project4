import React, { useState, useEffect } from "react";
import { ResultForm, ResultList } from "./components";
import "./styles/App.css";

function App() {
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem("results");
    return savedResults ? JSON.parse(savedResults) : [];
  });

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  const addResult = (result) => {
    setResults((prev) => [...prev, result]);
  };

  return (
    <div className="App">
      <header>
        <h1>Sports Results Tracker</h1>
      </header>
      <ResultForm addResult={addResult} />
      <ResultList results={results} />
      <footer>
        <a
          href="https://github.com/Csaldana784/Project4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </footer>
    </div>
  );
}

export default App;
