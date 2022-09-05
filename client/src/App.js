import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import WriteBlogPage from "./Pages/WriteBlogPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogs from "./Pages/SingleBlogPage";
import UserBlogsPage from "./Pages/UserBlogsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/write" element={<WriteBlogPage />} />
            <Route path="/blog/:id" element={<Blogs />} />
            <Route path="/user/:id" element={<UserBlogsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
