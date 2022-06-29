/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import "./donationItem.css";
import vdonatepic from "../pages/img/vdonate.png";
const AgentDonationitem = (props) => {
  const context = useContext(donateContext);
  const { agentdonation, agentallocate } = props;

  return (
    // <div className="col-md-3">
    //   <div className="card my-3">
    //     <div className="card-body">
    //       <h5 className="card-title">{agentdonation.category}</h5>
    //       <p className="card-text">{agentdonation.nameOfTheFood}</p>
    //       <p className="card-text">{agentdonation.noOfPeople}</p>
    //       <p className="card-text">{agentdonation.timeOfCookedFood}</p>
    //       <p className="card-text">{agentdonation.address}</p>
    //       <p className="card-text">{agentdonation.note}</p>
    //       <p className="card-text">{agentdonation.name}</p>
    //     </div>

    //     <button
    //       type="button"
    //       className="btn btn-primary btn-md btn-block my-2"
    //       onClick={() => {
    //         agentallocate(agentdonation);
    //       }}
    //     >
    //       Update Status
    //     </button>
    //   </div>
    // </div>

    <article class="card__content grid">
      <header class="card__header">
        <div class="card__header-img">
          <img src={vdonatepic} alt="" class="card__header-img" />
        </div>

        <h1 class="card__header-title">Delivered Details</h1>
      </header>

      <ul class="card__list grid">
        <li class="card__list-item">
          <p class="card__list-description">
            <strong> Food Category : </strong>
          </p>

          <p class="card__list-description1">{agentdonation.category}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> Name of the Item : </strong>
          </p>

          <p class="card__list-description1">{agentdonation.nameOfTheFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> How many people can consume?:</strong>
          </p>

          <p class="card__list-description1">{agentdonation.noOfPeople}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>When was it cooked? : </strong>
          </p>

          <p class="card__list-description1">
            {agentdonation.timeOfCookedFood}
          </p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Collection Address : </strong>
          </p>

          <p class="card__list-description1">{agentdonation.address}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Special Note : </strong>
          </p>

          <p class="card__list-description1">{agentdonation.note}</p>
        </li>
      </ul>
      <button
        type="button"
        class="Dbtn2"
        onClick={() => {
          agentallocate(agentdonation);
        }}
      >
        Update Status
      </button>
    </article>
  );
};

export default AgentDonationitem;
