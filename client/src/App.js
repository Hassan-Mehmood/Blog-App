import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import WriteBlog from "./Pages/WriteBlog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogs from "./Pages/Blogs";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/write" element={<WriteBlog />} />
            <Route path="/blogs/:userId" element={<Blogs />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
