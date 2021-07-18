import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from '../../actions';
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="logo" style={{cursor:"pointer"}}>
        <NavLink to={"/"} style={{color:"white"}}>Web Messenger</NavLink></div>

        <ul className="leftMenu">
          <li>
            <NavLink to={"/signin"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Sign up</NavLink>
          </li>
        </ul>
      </div>

      <div style={{ margin: "20px 0", color: "#fff", fontWeight: "bold" }}>
        Hi Raihan
      </div>

      <ul className="menu">
        <li>
          <Link to={"#"}>Logout</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
