import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userlogin } from "./App";

function Navbar() {

  const {loginName,setLoginName,loginEmail,setLoginEmail,loginPassword,setLoginPassword,logout,setLogout,welcomeName,setWelcomeName} = useContext(userlogin)
  // console.log(loginName);
  // console.log(loginEmail);
  // console.log(loginPassword);

  const logoutUser = () => {
    setLogout(false)
    setWelcomeName(' ')
    
  }

  return (
    <div>
      <div className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="welcome">WELCOME {loginName} </h2>
            <div className="logo">
              <Link to="/">
                <img src="images/logo.png" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" href="index.html">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link"
                    href="services.html"
                  >
                    services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" href="about.html">
                    About
                  </Link>
                </li>

                <div className="dropdown mt-1">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Links
                  </a>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="nav-item">
                      <Link to="/shop" className="nav-link" href="shop.html">
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/who" className="nav-link" href="shop.html">
                        Who
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/projects"
                        className="nav-link"
                        href="shop.html"
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/client" className="nav-link" href="shop.html">
                        Clients
                      </Link>
                    </li>
                  </ul>
                </div>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link" href="contact.html">
                    Contact
                  </Link>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0">
                <div className="search_icon">
                  <ul>
                    
                    <li>
                      <a href="#">
                        <img src="images/search-icon.png" />
                      </a>
                    </li>
                    {logout
                    ? 
                    <li>
                      <Link onClick={logoutUser}>Logout</Link>
                    </li>
                    : 
                    <>
                    <li>
                      <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                      <Link to="/register">REGISTER</Link>
                    </li>
                    </>
                    }
                    
                    
                  </ul>
                </div>
              </form>

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
