import "./styles//App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Colleges from "./components/colleges";
import Footer from "./components/footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Colleges_details from "./components/colleges_details";
import Courses from "./components/courses";
import Cources_details from "./components/courses_details";
import Result from "./components/result";
import Entrance_prep from "./components/entrance_prep";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses_details" element={<Cources_details />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/colleges_details" element={<Colleges_details />} />
          <Route path="/result" element={<Result />} />
          <Route path="/entrance_preparation" element={<Entrance_prep />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
