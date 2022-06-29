/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import AdminAllocateditem from "./AdminAllocateditem";

const AllocatedDonations = (props) => {
  const context = useContext(donateContext);
  let history = useHistory();
  const { allocates, getAllocated } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllocated();
    } else {
      history.push("/adminlogin");
    }
  }, []);

  return (
    <>
      {/* <h2>Your Donations</h2>
      <section class="container grid">
        <div class="card__container grid">
          {donates.map((donate) => {
            return <Donateitem key={donate._id} donate={donate} />;
          })}
        </div>
      </section> */}

      <br />
      <br />
      <br />
      <section class="container grid">
        <div class="card__container grid">
          {allocates.map((allocated) => {
            return (
              <AdminAllocateditem key={allocated._id} allocated={allocated} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllocatedDonations;
