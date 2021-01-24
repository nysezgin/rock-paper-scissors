import React from "react";
import GameButton from "./GameButton";

export default function GameResult({
  choice,
  homeChoice,
  rockImg,
  paperImg,
  scissorsImg,
  handleChoice,
  result,
}) {

  return (
    <div
      className={choice ? "game__result game__result--active" : "game__result"}
    >
      <div className="game__picked">
        <button
          className={
            "game__button game__button--inactive game__button--" + choice
          }
        >
          <GameButton
            img={
              choice === "rock"
                ? rockImg
                : choice === "paper"
                ? paperImg
                : choice === "scissors"
                ? scissorsImg
                : ""
            }
          />
        </button>
        <p className="game__picked-info">YOU PICKED</p>
      </div>
      <div className="game__picked">
        <button
          className={
            "game__button game__button--inactive game__button--right game__button--" +
            homeChoice
          }
        >
          <GameButton
            img={
              homeChoice === "rock"
                ? rockImg
                : homeChoice === "paper"
                ? paperImg
                : homeChoice === "scissors"
                ? scissorsImg
                : ""
            }
          />
        </button>
        <p className="game__picked-info">
          THE HOUSE <br /> PICKED
        </p>
      </div>
      <div className="game__result-info">
        {result}
        <button
          className="game__result-button"
          name="play-again"
          onClick={() => handleChoice("")}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
