import React, { useState } from "react";
import clsx from "clsx";
import css from "../styles/GridItem.module.css";

interface GridItemProps {
  children?: React.ReactNode;
}

export default function GridItem({ children }: GridItemProps) {
  const [isColored, setIsColored] = useState(false);
  const onClick = () => setIsColored((prev) => !prev);

  return (
    <div
      className={clsx(
        css["grid-item"],
        isColored ? css["grid-item--active"] : ""
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
