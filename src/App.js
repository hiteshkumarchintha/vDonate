import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import { Home } from "./components/Home";
import Home2 from "./pages/home/Home2";
import DonateState from "./context/donations/DonateState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from "./components/Alert";

import AdminNavbar from "./pages/navbar/AdminNavbar";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import AllocatedDonations from "./components/AllocatedDonations";
import DeliveredDonations from "./components/DeliveredDonations";

import Agent from "./components/Agent";
import AgentLogin from "./components/AgentLogin";
import AgentSignup from "./components/AgentSignup";

import { useState } from "react";
import YourDonations from "./components/YourDonations";
import AgentNavbar from "./pages/navbar/AgentNavbar";
import AgentDelivered from "./components/AgentDelivered";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <DonateState>
        <Router>
          <Alert alert={alert} />
          {/* <div className="container"> */}
          <Switch>
            {/* <Navbar /> */}
            <Route exact path="/donate">
              <Navbar />
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Home2 />
            </Route>

            <Route exact path="/yourdonations">
              <Navbar />
              <YourDonations />
            </Route>

            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>

            {/* <AdminNavbar /> */}
            <Route exact path="/adminfeed">
              <AdminNavbar />
              <Admin showAlert={showAlert} />
            </Route>
            <Route exact path="/allocated">
              <AdminNavbar />
              <AllocatedDonations />
            </Route>
            <Route exact path="/delivered">
              <AdminNavbar />
              <DeliveredDonations />
            </Route>
            <Route exact path="/adminlogin">
              <AdminLogin showAlert={showAlert} />
            </Route>
            <Route exact path="/adminsignup">
              <AdminSignup showAlert={showAlert} />
            </Route>

            <Route exact path="/agent">
              <Agent showAlert={showAlert} />
            </Route>
            <Route exact path="/agentallocated">
              <AgentNavbar />
              <Agent showAlert={showAlert} />
            </Route>
            <Route exact path="/agentdelivered">
              <AgentNavbar />
              <AgentDelivered />
            </Route>
            <Route exact path="/agentlogin">
              <AgentLogin showAlert={showAlert} />
            </Route>
            <Route exact path="/agentsignup">
              <AgentSignup showAlert={showAlert} />
            </Route>
          </Switch>

          {/* </div> */}
        </Router>
      </DonateState>
    </>
  );
}

export default App;
