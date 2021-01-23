import "./reset.css";
import "./App.scss";
import Score from "./components/Score";
import Title from "./components/Title";
import Rules from "./components/Rules";
import Game from "./components/Game";

function App() {
  return (
    <>
      <header>
        <Title />
        <Score />
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <Rules />
      </footer>
    </>
  );
}

export default App;
