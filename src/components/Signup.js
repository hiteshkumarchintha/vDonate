import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./adminlogin.css";
import vdonatepic from "../pages/img/vdonate.png";
import gif from "../pages/img/Secure login (1).gif";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch(
      "http://localhost:5000/api/userAuth/createuser",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="my-3">
    //     <div className="mb-3">
    //       <label htmlFor="name" className="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         value={credentials.name}
    //         onChange={onChange}
    //         id="name"
    //         name="name"
    //       />
    //     </div>

    //     <div className="mb-3">
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
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
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

    //     <div className="mb-3">
    //       <label htmlFor="cpassword" className="form-label">
    //         Confirm Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         value={credentials.cpassword}
    //         onChange={onChange}
    //         name="cpassword"
    //         id="cpassword"
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
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <Link to="/login" class="toogle">
                    {" "}
                    Log in
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
                      placeholder="Name"
                      value={credentials.name}
                      onChange={onChange}
                      id="name"
                      name="name"
                    />
                  </div>

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

export default Signup;
