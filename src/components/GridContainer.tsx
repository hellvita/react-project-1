import React from "react";
import css from "../styles/GridContainer.module.css";
import GridItem from "./GridItem";

interface GridContainerProps {
  count: number;
}

export default function GridContainer({ count }: GridContainerProps) {
  const gridSize = Math.ceil(Math.sqrt(count));
  const itemsToRender = Array(count).fill(0);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  };
  return (
    <div className={css["grid-container"]} style={gridStyle}>
      {itemsToRender.map((_, index) => (
        <GridItem key={index}></GridItem>
      ))}
    </div>
  );
}
