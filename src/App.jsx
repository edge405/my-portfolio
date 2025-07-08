// In your main App.js or similar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { BlogContainer } from "./components/blogs/BlogContainer"; // Adjust the import path as necessary

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogContainer />} />
      </Routes>
    </Router>
  );
}
