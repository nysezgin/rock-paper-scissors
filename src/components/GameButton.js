import React from "react";

export default function GameButton({ img }) {
  return (
      <div className="game__image-wrapper">
        <img className="game__image" src={img} alt="" />
      </div>
  );
}
