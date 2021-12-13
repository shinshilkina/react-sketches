import { useState } from "react";
import { CATS_ITEMS } from "../../tools/constants";
import styles from "./ExpandingPanel.module.css";

function ExpandingPanel() {
  const [active, setActive] = useState<number|undefined>();

  function openPanelHandler(id: number) {
    setActive(id);
  }

  return (
    <section className={styles.container}>
      {CATS_ITEMS.map((cat) => (
        <div
          key={cat.id}
          className={`${styles.panel} ${active === cat.id ? styles.active : ""}`}
          style={{ backgroundImage: cat.url }}
          onClick={() => {
            openPanelHandler(cat.id);
          }}
        >
          <h2>{cat.title}</h2>
        </div>
      ))}
    </section>
  );
}

export default ExpandingPanel;
