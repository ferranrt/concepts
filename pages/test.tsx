import React, { useState } from "react";

interface HexagonProps {
  x: number;
  y: number;
  letter: string;
  color?: "blue" | "red";
  onClick?: (value: string) => void;
}
const BOARD_SIZE = 500;
const CELL_SIDE = BOARD_SIZE / 8;
const GAP = 10;

const Hexagon = (props: HexagonProps): JSX.Element => {
  const { letter, color = "blue", onClick = () => {}, x, y } = props;
  const handlePolygonClick = (
    e: React.MouseEvent<SVGPolygonElement, MouseEvent>
  ): void => {
    onClick(letter);
  };

  const generatePoint = (i: number): string => {
    var angle_deg = 60 * i - 30;
    var angle_rad = (Math.PI / 180) * angle_deg;
    return `${x + CELL_SIDE * Math.cos(angle_rad)}, ${
      y + CELL_SIDE * Math.sin(angle_rad)
    }`;
  };

  return (
    <polygon
      onClick={handlePolygonClick}
      fill={color}
      points={`${generatePoint(1)} ${generatePoint(2)} ${generatePoint(
        3
      )} ${generatePoint(4)} ${generatePoint(5)} ${generatePoint(6)}`}
    ></polygon>
  );
};

export default function TestPage(): JSX.Element {
  const [currentTry, setCurrentTry] = useState("");
  const w = Math.sqrt(3) * CELL_SIDE;
  const h = CELL_SIDE * 2;
  const hexas = [
    { x: w, y: 0.5 * h, letter: "A" },
    { x: 2 * w + GAP, y: 0.5 * h, letter: "B" },

    { x: 0.5 * w, y: 1.25 * h + GAP, letter: "C" },
    { x: 2.5 * w + GAP * 2, y: 1.25 * h + GAP, letter: "E" },

    { x: w, y: 2 * h + GAP * 2, letter: "F" },
    { x: 2 * w + GAP, y: 2 * h + GAP * 2, letter: "G" },
  ];

  return (
    <div>
      <h1>{`Actual: ${currentTry}`}</h1>
      <svg width={BOARD_SIZE} height={BOARD_SIZE} color="red" strokeWidth={1}>
        {hexas.map((hexa) => {
          return (
            <Hexagon
              key={hexa.letter}
              x={hexa.x}
              y={hexa.y}
              letter={hexa.letter}
              onClick={() => {
                setCurrentTry((prev) => {
                  return prev + hexa.letter;
                });
              }}
            />
          );
        })}
        <Hexagon
          x={1.5 * w + GAP}
          y={1.25 * h + GAP}
          color="red"
          letter="X"
          onClick={() => {
            setCurrentTry((prev) => {
              return prev + "X";
            });
          }}
        />
      </svg>
      <div>
        <button
          onClick={() => {
            if (!currentTry.includes("X")) {
              alert("Centre sense usar");
            }
          }}
        >
          Verifica
        </button>
      </div>
    </div>
  );
}
