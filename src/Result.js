import React from "react";
import "./App.scss";

const CIRCLE = "CIRCLE";
const CROSS = "CROSS";

function Result({ winner, reset }) {
  return (
    <div>
      <h2 className="result__text">
        {winner === CIRCLE && "Circle is the WINNER!"}
        {winner === CROSS && "Cross is the WINNER!"}
        {winner === "We have a tie game!" && "We have a tie game!"}
      </h2>
      <button className="button__reset" onClick={reset}>
        <h3>Reset</h3>
      </button>
    </div>
  );
}

export default Result;
