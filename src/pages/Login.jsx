import style from "./style/login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ username, isAdmin: true }));
      navigate("/all");
    } else if (username === "user" && password === "user") {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, isAdmin: false })
      );
      navigate("/myblogs");
    } else if (username === "user1" && password === "user1") {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, isAdmin: false })
      );
      navigate("/myblogs");
    } else if (username && password) {
      alert("Invalid Username or Password");
    } else {
      alert("please enter Both Username and Password");
    }
  };
  return (
    <div className={style.mainLogin}>
      <div className={style.loginContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default login;
