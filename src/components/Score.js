import React from "react";

export default function Score({score}) {
  return (
      <section className="score">
        <h2 className="score__title">Score</h2>
        <p className="score__counter">{score}</p>
      </section>
  );
}
