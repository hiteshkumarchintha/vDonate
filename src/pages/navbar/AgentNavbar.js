/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import "./agentNavbar.css";
import vdonate from "../img/vdonate.png";

const AgentNavbar = () => {
  let history = useHistory();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/agentlogin");
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
                {/* <li>
                  <Link to="/agentfeed">All Donations</Link>
                </li> 
                <li>
                  <Link to="/agentallocated">Allocated</Link>
                </li>
                <li>
                  <Link to="/agentdelivered">Delivered</Link>
                </li>
                <li>
                  {!localStorage.getItem("token") ? (
                    <form className="d-flex">
                      <Link to="/agentlogin" class="Dbtn">
                        Login
                      </Link>

                      <Link to="/agentsignup" class="Dbtn">
                        SignUp
                      </Link>
                    </form>
                  ) : (
                    <Link to="#" class="Dbtn" onClick={handleLogout}>
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
                      <Link to="/agentallocated" className="navi-item">
                        Allocated
                      </Link>
                    </li>
                    <li className="navi-li">
                      <Link to="/agentdelivered" className="navi-item">
                        Delivered
                      </Link>
                    </li>

                    <li className="navi-li">
                      {!localStorage.getItem("token") ? (
                        <form className="d-flex">
                          <Link to="/agentlogin" className="Dbtn">
                            Login
                          </Link>

                          <Link to="/agentsignup" className="Dbtn">
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

export default AgentNavbar;
