import "./index.css";
// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
// import Game from "./components/Game";
import Game from "./components/Game";
// import GridContainer from "./components/GridContainer";
// import GridItem from "./components/GridItem";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
