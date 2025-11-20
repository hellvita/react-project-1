import React from "react";
import css from "../styles/GridItem.module.css";

interface GridItemProps {
  children?: React.ReactNode;
}

// export default function GridItem({ children }: GridItemProps): React.FC<GridItemProps> {}

export default function GridItem({ children }: GridItemProps) {
  return <div className={css["grid-item"]}>{children}</div>;
}
