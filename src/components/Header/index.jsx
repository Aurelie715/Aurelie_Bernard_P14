import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './style.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.title}>HRnet</div>
        <NavLink className={styles.nav} to="/current-employees">View Current Employee</NavLink>
    </div>
  )
}
