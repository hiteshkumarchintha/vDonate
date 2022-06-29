/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import "./donationItem.css";
import vdonatepic from "../pages/img/vdonate.png";
const AdminDonationitem = (props) => {
  const context = useContext(donateContext);
  const { donate, allocate } = props;
  //console.log(donate);

  // let history = useHistory();
  // const { agents, getAllAgents } = context;
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     getAllAgents();
  //   } else {
  //     history.push("/adminlogin");
  //   }
  // }, []);

  // const [value, setValue] = useState("");
  // const handleSelect = (e) => {
  //   console.log(e);
  //   setValue(e);
  // };
  return (
    // <div className="col-md-3">
    //   <div className="card my-3">
    //     <div className="card-body">
    //       <h5 className="card-title">{donate.category}</h5>
    //       <p className="card-text">{donate.nameOfTheFood}</p>
    //       <p className="card-text">{donate.noOfPeople}</p>
    //       <p className="card-text">{donate.timeOfCookedFood}</p>
    //       <p className="card-text">{donate.address}</p>
    //       <p className="card-text">{donate.note}</p>
    //       <p className="card-text">{donate.name}</p>
    //     </div>

    //     {/* <div>
    //       <select
    //         className="form-select"
    //         aria-label="Default select example"
    //         onSelect={handleSelect}
    //       >
    //         <option selected>Allocate Agent</option>
    //         {agents.map((agent) => {
    //           return <option value={agent._id}>{agent.name}</option>;
    //         })}
    //       </select>
    //     </div> */}
    //     <button
    //       type="button"
    //       className="btn btn-primary btn-md btn-block my-2"
    //       onClick={() => {
    //         allocate(donate);
    //       }}
    //     >
    //       Allocate
    //     </button>
    //   </div>
    // </div>

    <article class="card__content grid">
      <header class="card__header">
        <div class="card__header-img">
          <img src={vdonatepic} alt="" class="card__header-img" />
        </div>

        <h1 class="card__header-title">Donation Details</h1>
      </header>

      <ul class="card__list grid">
        <li class="card__list-item">
          <p class="card__list-description">
            <strong> Food Category : </strong>
          </p>

          <p class="card__list-description1">{donate.category}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> Name of the Item : </strong>
          </p>

          <p class="card__list-description1">{donate.nameOfTheFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> How many people can consume?:</strong>
          </p>

          <p class="card__list-description1">{donate.noOfPeople}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>When was it cooked? : </strong>
          </p>

          <p class="card__list-description1">{donate.timeOfCookedFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Collection Address : </strong>
          </p>

          <p class="card__list-description1">{donate.address}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Special Note : </strong>
          </p>

          <p class="card__list-description1">{donate.note}</p>
        </li>
      </ul>
      <button
        type="button"
        class="Dbtn2"
        onClick={() => {
          allocate(donate);
        }}
      >
        Allocate
      </button>
    </article>
  );
};

export default AdminDonationitem;
