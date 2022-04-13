import React from "react";
import logo from "./img/logo.svg";
import { Link } from "react-router-dom";
import "boxicons";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-3 col-6">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-md-7 col-12 d-flex justify-content-md-center my-3">
            <div className="searchbar mt-1">
              <form>
                <div className=" d-flex align-items-center justify-content-center">
                  <input
                    className="search-input ps-3"
                    type="text"
                    placeholder="Axtar..."
                  />
                  <button className="search-btn">
                    <box-icon name="search" color="#ffffff"></box-icon>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="d-flex align-items-center ">
              <div className="basket">
              <Link to='/cart'>  <box-icon name="basket"></box-icon></Link>
              </div>
              <div className="wishlist">
                <box-icon name="heart"></box-icon>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
