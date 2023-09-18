import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLoginBtnClick = () => {
    if (btnName === "Login") setBtnName("Logout");
    else setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
        <div className="logo-text">
          <Link to="/">Order Giant</Link>
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={handleLoginBtnClick}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
