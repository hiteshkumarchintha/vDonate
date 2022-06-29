import React from "react";
import "./donationItem.css";
import vdonatepic from "../pages/img/vdonate.png";
const DeliveredDonationitem = (props) => {
  const { agentdeliver } = props;
  return (
    // <div className="col-md-3">
    //   <div className="card my-3">
    //     <div className="card-body">
    //       <h5 className="card-title">{agentdeliver.category}</h5>
    //       <p className="card-text">{agentdeliver.nameOfTheFood}</p>
    //       <p className="card-text">{agentdeliver.noOfPeople}</p>
    //       <p className="card-text">{agentdeliver.timeOfCookedFood}</p>
    //       <p className="card-text">{agentdeliver.address}</p>
    //       <p className="card-text">{agentdeliver.note}</p>
    //       <p className="card-text">{agentdeliver.status}</p>
    //     </div>
    //     {/* <select className="form-select" aria-label="Default select example">
    //       <option selected>Allocate Agent</option>
    //       <option value="1">One</option>
    //       <option value="2">Two</option>
    //       <option value="3">Three</option>
    //     </select> */}
    //     {/* <button type="button" className="btn btn-primary btn-md btn-block my-2" onClick={() => {allocate(donate);}}>
    //       Update Status
    //     </button> */}
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

          <p class="card__list-description1">{agentdeliver.category}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> Name of the Item : </strong>
          </p>

          <p class="card__list-description1">{agentdeliver.nameOfTheFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> How many people can consume?:</strong>
          </p>

          <p class="card__list-description1">{agentdeliver.noOfPeople}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>When was it cooked? : </strong>
          </p>

          <p class="card__list-description1">{agentdeliver.timeOfCookedFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Collection Address : </strong>
          </p>

          <p class="card__list-description1">{agentdeliver.address}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Special Note : </strong>
          </p>

          <p class="card__list-description1">{agentdeliver.note}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Status of delivery </strong>
          </p>

          <p class="card__list-description1">{agentdeliver.status}</p>
        </li>
      </ul>
    </article>
  );
};

export default DeliveredDonationitem;
