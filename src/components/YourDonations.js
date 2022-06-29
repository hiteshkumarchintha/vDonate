/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import Donateitem from "./Donationitem";

const YourDonations = (props) => {
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
      <br />
      <br />
      <br />
      <section class="container grid">
        <div class="card__container grid">
          {donates.map((donate) => {
            return <Donateitem key={donate._id} donate={donate} />;
          })}
        </div>
      </section>
    </>
  );
};

export default YourDonations;
