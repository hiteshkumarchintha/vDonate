/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import DeliveredDonationitem from "./DeliveredDonationitem";
const AgentDelivered = (props) => {
  const context = useContext(donateContext);
  let history = useHistory();
  const { agentdelivers, getAgentDelivered } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAgentDelivered();
    } else {
      history.push("/agentlogin");
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
          {agentdelivers.map((agentdeliver) => {
            return (
              <DeliveredDonationitem
                key={agentdeliver._id}
                agentdeliver={agentdeliver}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AgentDelivered;
