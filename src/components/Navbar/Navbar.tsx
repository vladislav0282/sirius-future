
import {
    NavLink
  } from "react-router-dom";

import navbarStyles from "./Navbar.module.css";


export default function Navbar() {
    return (
        <div className={navbarStyles.box}>
            <NavLink to='/main'>Главная</NavLink><br/>
            <NavLink to='/schedule'>Расписание</NavLink><br/>
        </div>
    )
}