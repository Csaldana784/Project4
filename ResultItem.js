import React from "react";

function ResultItem({ result }) {
  return (
    <div>
      <p>
        {result.match}: {result.score}
      </p>
    </div>
  );
}

export default ResultItem;
