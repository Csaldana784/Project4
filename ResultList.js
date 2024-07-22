import React from "react";
import ResultItem from "./ResultItem";

function ResultList({ results }) {
  return (
    <div>
      {results.map((result, index) => (
        <ResultItem key={index} result={result} />
      ))}
    </div>
  );
}

export default ResultList;
