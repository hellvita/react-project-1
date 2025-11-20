import React, { useState } from "react";
import css from "../styles/GridContainer.module.css";
import GridItem from "./GridItem";

interface GridContainerProps {
  count: number;
}

export default function GridContainer({ count }: GridContainerProps) {
  const gridSize = Math.ceil(Math.sqrt(count));

  const [gridState, setGridState] = useState<boolean[]>(
    Array(count).fill(false)
  );
  const [isDrawing, setIsDrawing] = useState(false);

  const itemsToRender = Array(count).fill(0);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  };

  const handleMouseDown = (index: number) => {
    setIsDrawing(true);
    setGridState((prev) => {
      const newGrid = [...prev];
      newGrid[index] = !newGrid[index];
      return newGrid;
    });
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleMouseEnter = (index: number) => {
    if (!isDrawing) return;
    setGridState((prev) => {
      const newGrid = [...prev];
      newGrid[index] = !newGrid[index];
      return newGrid;
    });
  };

  return (
    <div
      className={css["grid-container"]}
      style={gridStyle}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {itemsToRender.map((_, index) => (
        <GridItem
          key={index}
          index={index}
          isActive={gridState[index]}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
        ></GridItem>
      ))}
    </div>
  );
}
