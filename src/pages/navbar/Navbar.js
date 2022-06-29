/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";
import vdonate from "../img/vdonate.png";

const Navbar = () => {
  let history = useHistory();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       iNotebook
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link
    //             className={`nav-link ${
    //               location.pathname === "/" ? "active" : ""
    //             }`}
    //             aria-current="page"
    //             to="/"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className={`nav-link ${
    //               location.pathname === "/about" ? "active" : ""
    //             }`}
    //             to="/about"
    //           >
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //       {!localStorage.getItem("token") ? (
    //         <form className="d-flex">
    //           <Link className="btn btn-primary mx-1" to="/login" role="button">
    //             Login
    //           </Link>
    //           <Link className="btn btn-primary mx-1" to="/signup" role="button">
    //             Signup
    //           </Link>
    //         </form>
    //       ) : (
    //         <button className="btn btn-primary" onClick={handleLogout}>
    //           Logout
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </nav>

    <>
      {/* <div className="font">
        <header>
          <div class="container1">
            <div class="logo">
              <img src={vdonate} alt="logo" />
            </div>

            <div class="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
                <li>
                  <Link to="/yourdonations">Your Donations</Link>
                </li>
                <li>
                  {!localStorage.getItem("token") ? (
                    <form className="d-flex">
                      <Link to="/login" class="Dbtn">
                        Login
                      </Link>

                      <Link to="/signup" className="Dbtn">
                        SignUp
                      </Link>
                    </form>
                  ) : (
                    <Link to="#" className="Dbtn" onClick={handleLogout}>
                      Log Out
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div> */}
      <div className="postion">
        <div className="navbody">
          <header className="navi-header">
            <div className="navi-container">
              <div className="navi-row align-items-center justify-content-between">
                <div className="navi-logo">
                  <Link to="#">
                    <img
                      src={vdonate}
                      alt="Vdonate"
                      style={{ height: "60px" }}
                    />
                  </Link>
                </div>
                <input type="checkbox" id="nav-check" />
                <label for="nav-check" className="nav-toggler">
                  <span className="navi-span"></span>
                </label>
                <nav className="navi">
                  <ul className="navi-ul">
                    <li className="navi-li">
                      <Link to="/" className="navi-item">
                        Home
                      </Link>
                    </li>
                    <li className="navi-li">
                      <Link to="/donate" className="navi-item">
                        Donate
                      </Link>
                    </li>
                    <li className="navi-li">
                      <Link to="/yourdonations" className="navi-item">
                        Your Donations
                      </Link>
                    </li>

                    {/* <li className="navi-li">
                    <a href="#" className="navi-item">
                      Logout
                    </a>
                  </li> */}

                    <li className="navi-li">
                      {!localStorage.getItem("token") ? (
                        <form className="d-flex">
                          <Link to="/login" className="Dbtn">
                            Login
                          </Link>

                          <Link to="/signup" className="Dbtn">
                            SignUp
                          </Link>
                        </form>
                      ) : (
                        <Link to="#" className="Dbtn" onClick={handleLogout}>
                          Log Out
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
