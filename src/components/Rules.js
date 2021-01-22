import React from "react";
import rulesImg from "./images/image-rules.svg"

export default function Rules() {
  return (
    <section className="rules">
      <h2 className="rules__title">RULES</h2>
      <img className="rules__info" src={rulesImg} alt="rules" />
    </section>
  );
}
