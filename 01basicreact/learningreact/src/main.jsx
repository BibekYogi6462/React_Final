import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";

const MyApp = () => {
  return (
    <>
      <h1>Custom App</h1>
    </>
  );
};
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// const reactElement = React.createElement(
//   "a",
//   { href: "https://www.google.com", target: "_blank" },

//   "Click me to visit google"
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp />
    {/* reactElement */}
  </StrictMode>
);
