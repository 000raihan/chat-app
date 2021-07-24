import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import * as actions from '../../store/actions/index';
import { Redirect } from "react-router";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const logOutButton = ()=>{
    dispatch(actions.logOut());
    
  }


  return (
    <header className="header">
      <div style={{ display: "flex" }}>
        <div className="logo" style={{ cursor: "pointer" }}>
          <NavLink to={"/"} style={{ color: "white" }}>
            Web Messenger
          </NavLink>
        </div>

        {!auth.authenticated ? (
          <ul className="leftMenu">
            <li>
              <NavLink to={"/signin"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>Sign up</NavLink>
            </li>
          </ul>
        ) : null}
      </div>

      <div style={{ margin: "20px 0", color: "#fff", fontWeight: "bold" }}>
        {auth.authenticated ? `Hi ${auth.user.firstName}` : null}
      </div>

      {auth.authenticated ? (
        <ul className="menu">
          <li>
            <Link to={"#"} onClick={()=>logOutButton()}>Logout</Link>
          </li>
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
