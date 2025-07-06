import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [bloggerName, setBloggerName] = useState("");
  const [email, setEmail] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [content, setContent] = useState("");
  const [mountainVisited, setMountainVisited] = useState("");

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blogToEdit = blogs.find((b) => b.id === parseInt(id));

    if (!blogToEdit) {
      alert("Blog not found");
      return navigate("/myblogs");
    }

    setTitle(blogToEdit.title);
    setBloggerName(blogToEdit.bloggerName);
    setEmail(blogToEdit.email);
    setMainImage(blogToEdit.mainImage);
    setGalleryImages(blogToEdit.galleryImages || []);
    setContent(blogToEdit.content);
    setMountainVisited(blogToEdit.mountainVisited);
  }, [id, navigate]);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
    }
  };

  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryImages((prev) => [...prev, ...files]);
  };

  const handleRemoveGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      id: parseInt(id),
      title,
      bloggerName,
      email,
      mainImage:
        mainImage instanceof File ? URL.createObjectURL(mainImage) : mainImage,
      galleryImages: galleryImages.map((img) =>
        img instanceof File ? URL.createObjectURL(img) : img
      ),
      content,
      mountainVisited,
      author: JSON.parse(localStorage.getItem("user")).username,
    };

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = blogs.map((b) =>
      b.id === updatedBlog.id ? updatedBlog : b
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    alert("Blog updated successfully!");
    navigate("/myblogs");
  };

  return (
    <div className="add-blog-form-container">
      <h2>Edit Blog</h2>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Blogger Name"
          value={bloggerName}
          onChange={(e) => setBloggerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Main Image:</label>
        <input type="file" accept="image/*" onChange={handleMainImageChange} />
        {mainImage && (
          <img
            src={
              mainImage instanceof File
                ? URL.createObjectURL(mainImage)
                : mainImage
            }
            alt="Main"
            style={{ width: "150px", margin: "10px 0" }}
          />
        )}

        <label>Gallery Images:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleGalleryImagesChange}
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
            <div key={i} style={{ position: "relative" }}>
              <img
                src={img instanceof File ? URL.createObjectURL(img) : img}
                alt={`Gallery ${i}`}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <button type="button" onClick={() => handleRemoveGalleryImage(i)}>
                &times;
              </button>
            </div>
          ))}
        </div>

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
        />

        <select
          value={mountainVisited}
          onChange={(e) => setMountainVisited(e.target.value)}
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

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
