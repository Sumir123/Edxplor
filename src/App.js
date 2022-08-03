import "./styles//App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Colleges from "./components/colleges";
import Footer from "./components/footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CollegesDetails from "./components/colleges_details";
import Courses from "./components/courses";
import CourcesDetails from "./components/courses_details";
import Result from "./components/result";
import EntrancePrep from "./components/entrance_prep";
import MockupTest, {
  BeforeYouStart,
  Questions,
} from "./components/mockup_test";
import BenifitOfMembership from "./components/benifit_of_membership";
import Signin from "./components/signin";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses_details" element={<CourcesDetails />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges_details" element={<CollegesDetails />} />
              <Route path="/result" element={<Result />} />
              <Route path="/entrance_preparation" element={<EntrancePrep />} />
              <Route path="/mockup_test" element={<MockupTest />} />
              <Route
                path="/mockup_test/before_you_start"
                element={<BeforeYouStart />}
              />
              <Route path="/mockup_test/questions" element={<Questions />} />
              <Route path="/mockup_test" element={<MockupTest />} />
              <Route path="/membership" element={<BenifitOfMembership />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
