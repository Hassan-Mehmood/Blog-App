import { BrowserRouter } from "react-router-dom";
// Routes, Route
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
