import React from "react";
import rockImg from "./images/icon-rock.svg";
import paperImg from "./images/icon-paper.svg";
import scissorsImg from "./images/icon-scissors.svg";

export default function Game() {
  return (
    <div className="game__wrapper">
      <button className="game__button">
        <img src={rockImg} alt="" />
      </button>
      <button className="game__button">
        <img src={paperImg} alt="" />
      </button>
      <button className="game__button">
        <img src={scissorsImg} alt="" />
      </button>
    </div>
  );
}
