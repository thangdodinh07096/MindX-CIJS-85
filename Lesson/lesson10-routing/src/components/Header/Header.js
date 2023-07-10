import React from "react";
import { Link, NavLink } from "react-router-dom";


const activeClass = (params) => {
    return params.isActive ? "active-item" : ""
}

function Header() {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>
                    <NavLink to="/" className={activeClass}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={activeClass}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={activeClass}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/" className={activeClass}>Movie Detail</NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Header;