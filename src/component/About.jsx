import { Link } from "react-router-dom";
import style from "./about.module.css";
function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h2>About Our App</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          delectus ducimus adipisci est, ab similique magni cum provident omnis,
          quasi sit neque natus obcaecati incidunt dignissimos placeat corrupti
          blanditiis consequuntur autem commodi aliquid quaerat! Delectus
          repellendus quibusdam iusto excepturi voluptatem! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Placeat molestiae itaque veniam
          nam accusamus quidem officiis quae quia asperiores blanditiis?
        </p>
        <Link to="/all" className={style.button}>
          <button> View Blogs</button>
        </Link>
      </div>
      <div className={style.aboutBg}></div>
    </div>
  );
}

export default About;
