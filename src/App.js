import "./reset.css";
import "./App.scss";
import React, {useState} from "react"
import Score from "./components/Score";
import Title from "./components/Title";
import Rules from "./components/Rules";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(localStorage.getItem("score") || 0);
  const handleScore = (result) => {
    if (result === "win") {
      setScore(score + 1)
    } else if (result === "lose") {
      setScore(score - 1)
    }
  }
  return (
    <>
      <header>
        <Title />
        <Score score={score} />
      </header>
      <main>
        <Game handleScore={handleScore} />
      </main>
      <footer>
        <Rules />
      </footer>
    </>
  );
}

export default App;
