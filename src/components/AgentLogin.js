import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./adminlogin.css";
import vdonatepic from "../pages/img/vdonate.png";
import gif from "../pages/img/Take Away (1).gif";

const AgentLogin = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/agentAuth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/agentallocated");
      props.showAlert("Logged In Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="my-3">
    //     <div className="mb-3">
    //       <h1>Agent Login</h1>
    //       <label htmlFor="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={credentials.email}
    //         onChange={onChange}
    //         id="email"
    //         name="email"
    //         aria-describedby="emailHelp"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         value={credentials.password}
    //         onChange={onChange}
    //         name="password"
    //         id="password"
    //       />
    //     </div>

    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div class="adminloginbody">
      <div class="adminloginmain">
        <div class="loginbox">
          <div class="inner-box">
            <div class="forms-warp">
              <form
                action="index.html"
                autocomplete="off"
                class="log-in-form"
                onSubmit={handleSubmit}
              >
                <div class="logov">
                  <img src={vdonatepic} alt="vdonate" class="logovimg" />
                </div>
                <div class="loginheading">
                  <h2> Welcome Back</h2>
                  <h6> New Agent?</h6>
                  <Link to="/agentsignup" class="toogle">
                    {" "}
                    Sign Up
                  </Link>
                </div>
                <div class="actual-form">
                  <div class="input-wrap">
                    <input
                      type="text"
                      minlength="4"
                      class="input-field"
                      autocomplete="off"
                      required
                      placeholder="ID"
                      value={credentials.email}
                      onChange={onChange}
                      id="email"
                      name="email"
                    />
                  </div>

                  <div class="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      class="input-field"
                      autocomplete="off"
                      required
                      placeholder="Password"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                    />
                  </div>

                  <input type="submit" value="Log in " class="sign-btn" />
                </div>
              </form>
            </div>

            <div class="slide">
              <div class="images-wrapper">
                <img src={gif} class="gif img-1 show" alt="" />
              </div>
              <div class="text-slider">
                <div class="text-wrap">
                  <div class="textgroup">
                    <h2>We Share because We Care</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;
