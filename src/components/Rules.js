import React, { useState } from "react";
import rulesImg from "./images/image-rules.svg";

export default function Rules() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        className="rules"
        type="button"
        name="rules"
        onClick={()=> setVisible(!visible)}
      >
        <h2 className="rules__title">RULES</h2>
      </button>
      <div
        className={visible ? "rules-modal rules-modal--visible" : "rules-modal"}
        onClick={() => setVisible(!visible)}
      >
        <article className="rules-modal__panel" onClick={(e)=> e.stopPropagation()}>
          <h2 className="rules-modal__title">RULES</h2>
          <button
            className="rules-modal__close-button"
            onClick={() => setVisible(!visible)}
          />
          <img className="rules-modal__info-image" src={rulesImg} alt="rules" />
        </article>
      </div>
    </>
  );
}
