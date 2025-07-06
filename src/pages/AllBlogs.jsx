import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import everestMain from "/src/img/everestMain.jpg";
import langtangMain from "/src/img/langtangMain.jpg";
import everest1 from "../img/everest-1.jpg";
import everest2 from "../img/everest-2.jpg";
import everest3 from "../img/everest-3.jpg";
import langtang1 from "../img/langtang-1.jpg";
import langtang2 from "../img/langtang-2.jpg";
import "./style/allBlogs.css";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  const fakeBlogs = [
    {
      id: "dummy-1",
      title: "Journey to Everest Base Camp",
      bloggerName: "Sita",
      email: "sita@example.com",
      mainImage: everestMain,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis illo odit accusamus ut esse pariatur consequatur beatae natus deleniti possimus eos quo, ipsa aperiam rem accusantium. Eveniet, est fuga.",
      galleryImages: [everest1, everest2, everest3],
      moutainVisited: "Everest",
      author: "guest",
    },
    {
      id: "dummy-2",
      title: "Peaceful Trails of Langtang",
      bloggerName: "Ram",
      email: "ram@example.com",
      mainImage: langtangMain,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis illo odit accusamus ut esse pariatur consequatur beatae natus deleniti possimus eos quo, ipsa aperiam rem accusantium. Eveniet, est fuga.",
      galleryImages: [langtang1, langtang2],
      moutainVisited: "Langtang",
      author: "guest",
    },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs")) || [];

    const merged = [
      ...fakeBlogs,
      ...saved.filter((b) => !fakeBlogs.find((f) => f.id === b.id)),
    ];

    localStorage.setItem("blogs", JSON.stringify(merged));
    setBlogs(merged);
  }, []);

  return (
    <div className="allblogs-container">
      <div className="maincard">
        {blogs.length === 0 && <p>No blogs yet. Add one!</p>}
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {blog.mainImage && (
              <img
                src={blog.mainImage}
                alt={blog.title}
                className="main-image"
              />
            )}
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p>
                <strong>Blogger:</strong> {blog.bloggerName}
              </p>
              <p>
                <strong>Mountain Visited:</strong>{" "}
                {blog.moutainVisited || blog.mountainVisited || "Not mentioned"}
              </p>
              <p>{blog.content.slice(0, 100)}...</p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBlogs;
