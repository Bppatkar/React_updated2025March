import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Kid from "./kid";
import Women from "./women";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids" element={<Kid />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </Router>
  );
}

export default App;
