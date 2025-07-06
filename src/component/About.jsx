import aboutImg from "../img/about.jpg";
import style from "./about.module.css";

function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h2>About Our App</h2>
        <p>{/* content */}</p>
        <Link to="/all" className={style.button}>
          <button> View Blogs</button>
        </Link>
      </div>
      <div
        className={style.aboutBg}
        style={{ backgroundImage: `url(${aboutImg})` }}
      />
    </div>
  );
}
