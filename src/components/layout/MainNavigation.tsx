import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import githubIcon from "../../assets/github-icon.svg";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Sketches</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/sketches" activeClassName={styles.active}>
              All sketches
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: "https://github.com/shinshilkina" }}
              target="_blank"
              rel="noreferrer"
              activeClassName={styles.active}
            >
              GitHub
              <img className={styles.github} alt="github" src={githubIcon} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
