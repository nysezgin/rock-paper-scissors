import React from "react";
import GameButton from "./GameButton";

export default function GameResult({
  choice,
  homeChoice,
  rockImg,
  paperImg,
  scissorsImg,
  handleChoice,
  handleScore,
}) {
  const winMessage = "YOU WIN!";
  const loseMessage = "YOU LOSE!";
  const drawMessage = "DRAW!";
  const handleResult = () => {
    if (choice === homeChoice) {
      return drawMessage;
    } else if (choice === "rock") {
      if (homeChoice === "scissors") {
        return winMessage;
      } else if (homeChoice === "paper") {
        return loseMessage;
      }
    } else if (choice === "paper") {
      if (homeChoice === "rock") {
        return winMessage;
      } else if (homeChoice === "scissors") {
        return loseMessage;
      }
    } else if (choice === "scissors") {
      if (homeChoice === "paper") {
        return winMessage;
      } else if (homeChoice === "rock") {
        return loseMessage;
      }
    } else {
      return "ERROR";
    }
  };

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
        {handleResult()}
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
