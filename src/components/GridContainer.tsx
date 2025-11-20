import React from "react";
import css from "../styles/GridContainer.module.css";

interface GridContainerProps {
  children: React.ReactNode;
}

export default function GridContainer({ children }: GridContainerProps) {
  const items = React.Children.toArray(children).filter(
    (item) => item !== null
  );
  const itemCount = items.length;

  const gridSize = Math.ceil(Math.sqrt(itemCount));
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  };
  return (
    <div className={css["grid-container"]} style={gridStyle}>
      {children}
    </div>
  );
}
