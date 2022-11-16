import styles from "./NavBar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { HiBookmark, HiUser, HiUserAdd } from "react-icons/hi";
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
            <NavLink to='/'>
              <div className={styles.logo}>
                <h1>SPIN</h1>
                <BsFillStarFill color="#097969" size={"3.2em"} style={{margin: "0 .2rem"}}/>
                <h1>OFF</h1>
              </div>
            </NavLink>
          </div>
          <div className={styles.links}>
            <NavLink to={'favorites'}>
              <div className={styles.left_links}>
                <HiBookmark />
                <h2>My List</h2>
              </div>
            </NavLink>
            {/*------------------------------------*/}
            <NavLink to={'login'}>
              <div className={styles.left_links}>
                <HiUser/>
                <h2>Login</h2>
              </div>
            </NavLink>
            {/*------------------------------------*/}
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
