import { Link, useNavigate } from "react-router-dom";
import "./component.css";
import { use, useEffect, useState } from "react";
function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">MOUTAINS BLOG</div>

      <nav className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/explore" className="nav-link">
          About
        </Link>
        <Link to="/add" className="nav-link">
          Add
        </Link>
        <Link to="/myblogs" className="nav-link">
          My Blogs
        </Link>
        {user ? (
          <div className="user-dropdown">
            <button onClick={toggleDropdown} className="nav-button">
              {user.username}
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
