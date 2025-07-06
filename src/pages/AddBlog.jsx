import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/addBlog.css";
function AddBlog() {
  const [title, setTitle] = useState("");
  const [bloggerName, setBloggerName] = useState("");
  const [email, setEmail] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [content, setContent] = useState("");
  const [moutainVisited, setMoutainVisited] = useState("");
  const navigate = useNavigate();

  const handleMainImageChange = (event) => {
    setMainImage(event.target.file[0]);
  };

  const handleGalleryImageChange = (event) => {
    const files = Array.from(event.target.file);
    setGalleryImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const newBlog = {
      id: Date.now(),
      title,
      bloggerName,
      email,
      mainImage: mainImage ? URL.createObjectURL(mainImage) : "",
      galleryImages: galleryImages.map((image) => URL.createObjectURL(image)),
      content,
      moutainVisited,
      author: user?.username || "guest",
    };

    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = [newBlog, ...existingBlogs];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    alert("Blog added successfully!");
    navigate("/explore");
  };

  return (
    <div>
      <div className="add-blog-form-container">
        <h2>Add New Blog</h2>
        <form className="add-blog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />

          <input
            type="text"
            placeholder="Blogger Name"
            value={bloggerName}
            onChange={(event) => {
              setBloggerName(event.target.value);
            }}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label> Main Image: </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleMainImageChange}
            required
          />
          <label> Gallery Image</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleGalleryImageChange}
          />
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                alt={`Gallery ${i}`}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            ))}
          </div>

          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
            required
            rows={6}
          />

          <select
            value={moutainVisited}
            onChange={(event) => {
              setMoutainVisited(event.target.value);
            }}
            required
          >
            <option value="">Select Mountain Visited</option>
            <option value="Everest">Everest</option>
            <option value="Annapurna">Annapurna</option>
            <option value="Langtang">Langtang</option>
            <option value="Dhaulagiri">Dhaulagiri</option>
            <option value="Manaslu">Manaslu</option>
            <option value="Makalu">Makalu</option>
            <option value="Kanchenjunga">Kanchenjunga</option>
            <option value="Machapuchare">Machapuchare</option>
          </select>

          <button type="submit">Submit Blog</button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
