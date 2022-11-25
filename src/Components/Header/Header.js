import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="headerWrap container-fluid">
        <div className="headerTopSection mt-3">
          <h3>
            Shop<span>cart</span>
          </h3>
          <div className="signIn align-self-center">
            <i className="fa-solid fa-user"></i>
            <span>sign in</span>
          </div>
        </div>
        <hr />
        <div className="searchSection d-flex justify-content-between">
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <span>Dhaka,1212</span>
          </div>
          <div className="serarchBoxWrap">
            <input type="text" placeholder="Search" />
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          </div>
        </div>
        <div className="navSection">
          <span>Fresh</span>
          <span>Today's Deals</span>
          <span>Mobiles</span>
          <span>Gift Carts</span>
          <span>Women Clothing</span>
          <span>Men Clothing</span>
          <span>Men Clothing</span>
          <span>Kids Clothing</span>
          <span>Health</span>
          <span>Pet corner</span>
          <span>Books</span>
          <span>Beauty</span>
          <span>Kitchen</span>
          <span>Bed Room</span>
          <span>Sport</span>
          <span>Bags</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
