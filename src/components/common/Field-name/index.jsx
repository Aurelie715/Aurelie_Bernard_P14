import React from "react";
import styles from "./style.module.scss";

export default function FieldName({ name, inputId }) {
  return (
    <>
      <label className={styles["label-name"]} htmlFor={inputId}>{name}</label>
    </>
  );
}
