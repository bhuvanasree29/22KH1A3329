
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import URLShortener from "./components/URLShortener";
import URLStats from "./components/URLStats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortener />} />
        <Route path="/stats" element={<URLStats />} />
      </Routes>
    </Router>
  );
}

export default App;
