import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/explore"
            element={
              <>
                <Navbar />
                <Main />
              </>
            }
          ></Route>

          <Route
            path="/add"
            element={
              <>
                <Navbar />
                <AddBlog />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
