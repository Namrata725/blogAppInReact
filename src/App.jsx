import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
        <Route
          path="/add"
          element={
            <>
              <Navbar />
              <AddBlog />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/all"
          element={
            <>
              <Navbar />
              <AllBlogs />
            </>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <>
              <Navbar />
              <BlogDetails />
            </>
          }
        />
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
        {/* Optional: Fallback 404 route */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
