import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./pages/style/blogDetails.css";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const found = storedBlogs.find((b) => String(b.id) === String(id));
    setBlog(found);
  }, [id]);

  if (!blog) return <p style={{ color: "white" }}>Blog not found!</p>;

  return (
    <div className="blog-details-page">
      <h2 style={{ color: "white" }}>{blog.title}</h2>
      <img src={blog.mainImage} alt={blog.title} className="detail-main-img" />
      <p>
        <strong>Blogger:</strong> {blog.bloggerName} ({blog.email})
      </p>
      <p>
        <strong>Mountain Visited:</strong> {blog.mountainVisited}
      </p>
      <p className="full-content">{blog.content}</p>

      {blog.galleryImages?.length > 0 && (
        <>
          <h4>Gallery</h4>
          <div className="gallery-grid">
            {blog.galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                className="gallery-img"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BlogDetails;
