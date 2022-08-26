import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import WriteBlog from "./Pages/WriteBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WriteBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
