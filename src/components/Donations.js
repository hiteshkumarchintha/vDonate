/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import AddDonate from "./AddDonate";
import Donateitem from "./Donationitem";

const Donates = (props) => {
  const context = useContext(donateContext);
  let history = useHistory();
  const { donates, getDonates } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getDonates();
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <AddDonate showAlert={props.showAlert} />

      {/* <div className="row my-3">
        <h2>Your Donations</h2>
        {donates.map((donate) => {
          return <Donateitem key={donate._id} donate={donate} />;
        })}
      </div> */}
    </>
  );
};

export default Donates;
