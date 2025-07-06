import { Link } from "react-router-dom";
import aboutImg from "/src/img/about.jpg";
import style from "./about.module.css";

function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContent}>
        <h2>About Our App</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          facere deleniti veniam non dolor omnis sint consectetur commodi
          cupiditate. Asperiores nam perferendis explicabo iure porro nemo dolor
          hic perspiciatis saepe ex neque inventore ab et aliquam doloribus,
          impedit ipsa illum earum voluptate ullam nihil. Modi ab veniam est
          nihil. Libero ad veniam adipisci unde vel iusto voluptas illum
          inventore architecto iste labore, quasi magnam sequi eum hic sed
          pariatur repellendus quas placeat velit odio optio facilis? Fuga autem
          minima aliquam perspiciatis ex asperiores incidunt id, laborum eveniet
          facilis rem eum recusandae itaque quis quibusdam quae blanditiis
          molestiae facere labore architecto aut deserunt? Provident reiciendis
          officiis repellat quos ipsum, necessitatibus dicta ullam ut ipsa eius
          hic eum tenetur incidunt autem ex blanditiis unde natus officia,
          magnam numquam deleniti delectus minus? Nulla a amet quia saepe,
          repudiandae, vero fugiat delectus esse reprehenderit pariatur illum
          rem quisquam? Fugit ut eaque voluptas excepturi expedita?
        </p>
        <Link to="/all" className={style.button}>
          <button>View Blogs</button>
        </Link>
      </div>
      <div
        className={style.aboutBg}
        style={{ backgroundImage: `url(${aboutImg})` }}
      ></div>
    </div>
  );
}

export default About;
