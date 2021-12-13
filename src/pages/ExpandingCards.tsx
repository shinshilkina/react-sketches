import styles from "./ExpandingCards.module.css";
import ExpandingPanel from "../components/sketches/ExpandingPanel";
import { NavLink } from "react-router-dom";

const ExpandingCards = () => {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <NavLink to="/" className={styles.back} />
        Expanding Cards
      </div>
      <ExpandingPanel />
    </div>
  );
};

export default ExpandingCards;
