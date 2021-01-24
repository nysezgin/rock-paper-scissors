import React, { useRef, useEffect, useState } from "react";
import rockImg from "./images/icon-rock.svg";
import paperImg from "./images/icon-paper.svg";
import scissorsImg from "./images/icon-scissors.svg";
import GameButton from "./GameButton";
import GameResult from "./GameResult";

export default function Game({handleScore}) {
  //// Handle Choice
  const [choice, setChoice] = useState("");

  const handleChoice = (playerChoice) => {
    setChoice(playerChoice);
  };

  // Handle Home Choice
    const [homeChoice, setHomeChoice] = useState("");
    const getRandomInt = () => {
      return Math.floor(Math.random() * 3);
    };
    useEffect(() => {
      const randomInt = getRandomInt();
      let newHomeChoice = "";
      if (randomInt === 0) {
        newHomeChoice = "rock";
      } else if (randomInt === 1) {
        newHomeChoice = "paper";
      } else if (randomInt === 2) {
        newHomeChoice = "scissors";
      }
      setHomeChoice(newHomeChoice);
    }, [choice]);

  //// Button Coordinates
  const [coordinates, setCoordinates] = useState({});

  // Button DOM
  const rockRef = useRef(null);
  const paperRef = useRef(null);
  const scissorsRef = useRef(null);
  const gameRef = useRef(null);

  // Handle Coordinates (object center)
  const handleCoordinates = () => {
    const marginX = (window.innerWidth - gameRef.current.getBoundingClientRect().width) / 2; // halved for correct positioning
    const rockX =
      rockRef.current.getBoundingClientRect().left - marginX +
      rockRef.current.getBoundingClientRect().width / 2;
    const rockY =
      rockRef.current.getBoundingClientRect().bottom -
      rockRef.current.getBoundingClientRect().height / 2;
    const paperX =
      paperRef.current.getBoundingClientRect().left -
      marginX +
      paperRef.current.getBoundingClientRect().width / 2;
    const paperY =
    paperRef.current.getBoundingClientRect().bottom -
    paperRef.current.getBoundingClientRect().height / 2;
    const scissorsX =
      scissorsRef.current.getBoundingClientRect().left -
      marginX +
      scissorsRef.current.getBoundingClientRect().width / 2;
    const scissorsY =
      scissorsRef.current.getBoundingClientRect().bottom -
      scissorsRef.current.getBoundingClientRect().height / 2;
    setCoordinates({
      rockX: rockX,
      rockY: rockY,
      paperX: paperX,
      paperY: paperY,
      scissorsX: scissorsX,
      scissorsY: scissorsY,
    });
  };

  // Monitor coordinates on window resize
  useEffect(() => {
    window.addEventListener("resize", handleCoordinates);
    handleCoordinates();
  }, []);
  return (
    <div ref={gameRef} className="game">
      <svg
        className={
          choice ? "game__canvas" : "game__canvas game__canvas--active"
        }
      >
        <line
          className="game__line"
          x1={coordinates.rockX}
          y1={coordinates.rockY}
          x2={coordinates.paperX}
          y2={coordinates.paperY}
        />
        <line
          className="game__line"
          x1={coordinates.rockX}
          y1={coordinates.rockY}
          x2={coordinates.scissorsX}
          y2={coordinates.scissorsY}
        />
        <line
          className="game__line"
          x1={coordinates.scissorsX}
          y1={coordinates.scissorsY}
          x2={coordinates.paperX}
          y2={coordinates.paperY}
        />
      </svg>
      <div
        className={
          choice ? "game__interface" : "game__interface game__interface--active"
        }
      >
        <button
          ref={rockRef}
          className={
            choice
              ? "game__button game__button--rock game__button--inactive"
              : "game__button game__button--rock"
          }
          onClick={() => handleChoice("rock")}
        >
          <GameButton img={rockImg} />
        </button>
        <button
          ref={paperRef}
          className={
            choice
              ? "game__button game__button--paper game__button--right game__button--inactive"
              : "game__button game__button--right game__button--paper"
          }
          onClick={() => handleChoice("paper")}
        >
          <GameButton img={paperImg} />
        </button>
        <button
          ref={scissorsRef}
          className={
            choice
              ? "game__button game__button--bottom game__button--scissors game__button--inactive"
              : "game__button game__button--bottom game__button--scissors"
          }
          onClick={() => handleChoice("scissors")}
        >
          <GameButton img={scissorsImg} />
        </button>
      </div>
      <GameResult
        choice={choice}
        homeChoice={homeChoice}
        rockImg={rockImg}
        paperImg={paperImg}
        scissorsImg={scissorsImg}
        handleChoice={handleChoice}
        handleScore={handleScore}
      />
    </div>
  );
}
