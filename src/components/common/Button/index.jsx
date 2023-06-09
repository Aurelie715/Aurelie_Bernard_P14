import React from "react";
import styles from "./style.module.scss";


export default function Button({type, text, ...props}) {
  
  return (
    
      <button className={styles.button} type="button" {...props}>
        {text}
      </button>
  );
}
