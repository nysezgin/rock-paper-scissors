import "./reset.css";
import "./App.scss";
import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import Title from "./components/Title";
import Rules from "./components/Rules";
import Game from "./components/Game";

const winMessage = "YOU WIN!";
const loseMessage = "YOU LOSE!";
const drawMessage = "DRAW!";
const errorMessage = "ERROR";
const getRandomInt = () => {
  return Math.floor(Math.random() * 3);
};
const getRandomChoice = () => {
  const newRandomInt = getRandomInt();
  if (newRandomInt === 0) {
    return "rock"
  } else if (newRandomInt === 1) {
    return "paper"
  } else if (newRandomInt === 2) {
    return "scissors"
  } else {
    return "error"
  }
}

function App() {
  const [gameData, setGameData] = useState({
    choice: "",
    homeChoice: "",
    result: "",
    score: JSON.parse(localStorage.getItem("score")) || 0,
  });

  const handleGameData = (choice) => {
    let newChoice = choice
    let newHomeChoice = getRandomChoice()
    let newResult = ""
    let newScore = gameData.score

    if (newChoice === newHomeChoice) {
      newResult = drawMessage
    }

    else if (newChoice === "rock") {
      if (newHomeChoice === "scissors") {
        newResult = winMessage
        newScore = newScore + 10;
      } else if (newHomeChoice === "paper") {
        newResult = loseMessage
        newScore = newScore - 10;
      }
    }

    else if (newChoice === "paper") {
      if (newHomeChoice === "rock") {
        newResult = winMessage
        newScore = newScore + 10;
      } else if (newHomeChoice === "scissors") {
        newResult = loseMessage
        newScore = newScore - 10;
      }
    }

    else if (newChoice === "scissors") {
      if (newHomeChoice === "paper") {
        newResult = winMessage
        newScore = newScore + 10;
      } else if (newHomeChoice === "rock") {
        newResult = loseMessage
        newScore = newScore - 10;
      }
    }

    else {
      newResult = errorMessage
    }

    setGameData({choice: newChoice, homeChoice: newHomeChoice, result: newResult, score: newScore})
  };

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(gameData.score))
  }, [gameData])

  //// Reset Game
  const resetGame = () => {
    const newGameData = {
      choice: "",
      homeChoice: "",
      result: "",
      score: gameData.score,
    };
    setGameData(newGameData);
  };

  return (
    <>
      <header>
        <Title />
        <Score score={gameData.score} />
      </header>
      <main>
        <Game
          choice={gameData.choice}
          homeChoice={gameData.homeChoice}
          result={gameData.result}
          resetGame={resetGame}
          handleGameData={handleGameData}
        />
      </main>
      <footer>
        <Rules />
      </footer>
    </>
  );
}

export default App;
