import React from "react";
import clsx from "clsx";
import css from "../styles/GridItem.module.css";

interface GridItemProps {
  children?: React.ReactNode;
  index: number;
  isActive: boolean;
  onMouseDown: (index: number) => void;
  onMouseEnter: (index: number) => void;
}

export default function GridItem({
  children,
  index,
  isActive,
  onMouseDown,
  onMouseEnter,
}: GridItemProps) {
  return (
    <div
      className={clsx(
        css["grid-item"],
        isActive ? css["grid-item--active"] : ""
      )}
      onMouseDown={() => onMouseDown(index)}
      onMouseEnter={() => onMouseEnter(index)}
    >
      {children}
    </div>
  );
}
