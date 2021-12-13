import { NavLink } from "react-router-dom";
import { ITEMS_LIST } from "../../tools/constants";
import styles from "./SketchesList.module.css";

const SketchesList = () => {
  return (
    <div className={styles["all-sketches"]}>
      <h1>All Sketches Items:</h1>
      <ul className={styles.list}>
        {ITEMS_LIST.map((item) => {
          return (
            <li>
              <div
                className={styles.icon}
                style={{ backgroundPosition: item.backgroundPosition }}
              />
              <NavLink to={item.link}>{item.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SketchesList;
