import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/myBlogs.css";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const username = user.username?.toLowerCase();

    const filteredBlogs = user.isAdmin
      ? allBlogs
      : allBlogs.filter((blog) => blog.author?.toLowerCase() === username);

    setMyBlogs(filteredBlogs);
  }, [navigate]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    const updatedMyBlogs = myBlogs.filter((b) => b.id !== id);
    setMyBlogs(updatedMyBlogs);

    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedAllBlogs = allBlogs.filter((b) => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(updatedAllBlogs));
  };

  return (
    <div className="myblogs-container">
      <h2>My Blogs</h2>
      <div className="table-wrapper">
        <table className="blog-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Mountain</th>
              <th>Blogger</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myBlogs.length === 0 ? (
              <tr>
                <td colSpan="5">No blogs found.</td>
              </tr>
            ) : (
              myBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>
                    {blog.mountainVisited ||
                      blog.moutainVisited ||
                      "Not mentioned"}
                  </td>
                  <td>{blog.bloggerName}</td>
                  <td>{blog.email}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="action-btn edit">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="action-btn delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBlogs;
