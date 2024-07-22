import React, { useState } from "react";

function ResultForm({ addResult }) {
  const [result, setResult] = useState({ match: "", score: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResult((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addResult(result);
    setResult({ match: "", score: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="match"
        placeholder="Match"
        value={result.match}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="score"
        placeholder="Score"
        value={result.score}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Result</button>
    </form>
  );
}

export default ResultForm;
