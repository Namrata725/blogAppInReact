import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/explore" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
