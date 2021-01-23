import React, { useRef, useEffect, useState } from "react";
import rockImg from "./images/icon-rock.svg";
import paperImg from "./images/icon-paper.svg";
import scissorsImg from "./images/icon-scissors.svg";
import GameButton from "./GameButton";

export default function Game() {
  const [coordinates, setCoordinates] = useState({});
  const rockRef = useRef(null);
  const paperRef = useRef(null);
  const scissorsRef = useRef(null);

  const handleCoordinates = () => {
    const rockX =
      rockRef.current.getBoundingClientRect().left +
      rockRef.current.getBoundingClientRect().width / 2;
    const rockY =
      rockRef.current.getBoundingClientRect().bottom -
      rockRef.current.getBoundingClientRect().height / 2;
    const paperX =
      paperRef.current.getBoundingClientRect().left +
      paperRef.current.getBoundingClientRect().width / 2;
    const paperY =
    paperRef.current.getBoundingClientRect().bottom -
    paperRef.current.getBoundingClientRect().height / 2;
    const scissorsX =
      scissorsRef.current.getBoundingClientRect().left +
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
  }

  useEffect(() => {
    window.addEventListener("resize", handleCoordinates)
    handleCoordinates();
  }, []);
  return (
    <div className="game">
      <svg className="game__canvas">
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
      <button ref={rockRef} className="game__button game__button--rock">
        <GameButton img={rockImg} />
      </button>
      <button ref={paperRef} className="game__button game__button--paper">
        <GameButton img={paperImg} />
      </button>
      <button ref={scissorsRef} className="game__button game__button--scissors">
        <GameButton img={scissorsImg} />
      </button>
    </div>
  );
}
