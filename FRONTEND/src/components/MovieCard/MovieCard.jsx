import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

function MovieCard({ title, year, id, poster }) {
  return (
    <li className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: "url(" + poster + ")" }}
      ></div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h3>{year}</h3>
        </div>
        <Link to={`/movie/${id}`} className={styles.detail_button}>
          <div>
            <p>View Full Info</p>
            <HiInformationCircle size={"2.4em"} />
          </div>
        </Link>
      </div>
    </li>
  );
}

export default MovieCard;
