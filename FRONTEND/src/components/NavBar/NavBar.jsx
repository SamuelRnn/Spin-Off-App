import styles from "./NavBar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { BsFillStarFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function NavBar() {
  const clickLinkHandler = () => {
    alert('Componente en desarrollo')
  }
  return (
    <IconContext.Provider value={{ size: "2.6em" }}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <div className={styles.logo}>
              <h1>SPIN</h1>
              <BsFillStarFill color="#097969" size={"3.2em"} style={{margin: "0 .2rem"}}/>
              <h1>OFF</h1>
            </div>
          </div>
          <div className={styles.links}>
            <NavLink to={'favorites'} onClick={clickLinkHandler}>
              <div className={styles.left_links}>
                <HiHeart />
                <h2>My List</h2>
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
