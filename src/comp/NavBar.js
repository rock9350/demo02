import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, logout } from "../redux/reducer";

const NavBar = () => {
  const user = useSelector((state) => state.data.arr.logInDetails);
  const dispatch = useDispatch();
 
  const [open, setOpen] = useState(false);

  const LogOut = () => {
    dispatch(logout());
    console.log("log");
    console.log(user);
  };

  const OpenCart = () =>{
    setOpen(!open);
  }
  useEffect(() => {
    dispatch(cartAction(open));
  }, [open]);

  return (
    <>
      <div id="main">
        <div id="icon">Booking.Dot</div>
        <div id="about">
          {/* <a to="/RESUME" className="navBar">
          Saved House
        </a> */}
          {user.length == 0 ? (
            <Link to="/login" className="navBar">
              Login
            </Link>
          ) : (
            <>
              {user[0].loginStatus&& <button  className="navBar" onClick={OpenCart}>Cart</button>}
              <button className="navBar" onClick={LogOut}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
