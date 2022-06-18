import "./styles//App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Colleges from "./components/colleges";
import Footer from "./components/footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Colleges_details from "./components/colleges_details";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/colleges_details" element={<Colleges_details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
