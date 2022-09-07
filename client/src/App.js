import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import WriteBlogPage from "./Pages/WriteBlogPage";

import Blogs from "./Pages/SingleBlogPage";
import UserBlogsPage from "./Pages/UserBlogsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WriteBlogPage />} />
          <Route path="/blog/:id" element={<Blogs />} />
          <Route path="/user_blogs/:id" element={<UserBlogsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
