import "./index.css";
// main.tsx

import { createRoot } from "react-dom/client";

const techName = "React";
const imgUrl =
  "https://blog.logrocket.com/wp-content/uploads/2025/02/advanced-react-state-management-using-url-parameters.png";

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <h1>Welcome to {techName}</h1>
    <p>
      This is JSX — it looks like HTML, but it's not quite the same. It has its
      own rules!
    </p>
    <img src={imgUrl} alt="React logo" width="895" />
  </>
);
