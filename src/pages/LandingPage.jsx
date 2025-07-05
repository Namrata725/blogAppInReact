import styles from "./style/LandingPage.module.css";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles.textOverlay}>
        <h1>
          Let’s <br /> Adventure
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          nulla exercitationem minima laudantium at placeat quas, ipsum
          molestias doloribus assumenda.
        </p>

        <Link to={"/explore"} className={styles.exploreBtn}>
          Explore
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
