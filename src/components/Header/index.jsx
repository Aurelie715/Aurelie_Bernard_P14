import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <div>HRnet</div>
        <Link to="/current-employees">View Current Employee</Link>
    </div>
  )
}
