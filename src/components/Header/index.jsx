import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

export default function Header() {

  const navLinkClassName = ({ isActive }) => {
    return `${isActive ? styles.active : ""} ${styles.nav}`;
  };

  return (
    <div className={styles.header}>
      <div className={styles.title}>HRnet</div>
      <div className={styles.menu}>
        <NavLink className={navLinkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkClassName} to="/current-employees">
          View Current Employee
        </NavLink>
      </div>
    </div>
  );
}
