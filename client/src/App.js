import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import WriteBlogPage from "./Pages/WriteBlogPage";

import Blogs from "./Pages/SingleBlogPage";
import UserBlogsPage from "./Pages/UserBlogsPage";
import UpdateBlogPage from "./Pages/UpdateBlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/write" element={<WriteBlogPage />} />
          <Route path="/blog/edit/:id" element={<UpdateBlogPage />} />
          <Route path="/blog/:id" element={<Blogs />} />
          <Route path="/user_blogs/:id" element={<UserBlogsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
