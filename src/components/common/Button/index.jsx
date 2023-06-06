import React from "react";
import styles from "./style.module.scss";

export default function Button() {
  return (
    <div className={styles["button-container"]}>
      <button className={styles.button} type="button">Save</button>
    </div>
  );
}
