import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import AddBlog from "./pages/AddBlog";
import AllBlogs from "./pages/AllBlogs";
import BlogDetails from "./BlogDetails";
import MyBlogs from "./pages/MyBlogs";
import EditBlog from "./pages/EditBlog";
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

          <Route
            path="/all"
            element={
              <>
                <Navbar />
                <AllBlogs />
              </>
            }
          ></Route>

          <Route
            path="/blog/:id"
            element={
              <>
                <Navbar />
                <BlogDetails />
              </>
            }
          ></Route>

          <Route
            path="/myblogs"
            element={
              <>
                <Navbar />
                <MyBlogs />
              </>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <>
                <Navbar />
                <EditBlog />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
