import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import WriteBlog from "./Pages/WriteBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WriteBlog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
