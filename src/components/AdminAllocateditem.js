import React from "react";
import "./donationItem.css";
import vdonatepic from "../pages/img/vdonate.png";
const AdminAllocateditem = (props) => {
  const { allocated } = props;

  return (
    // <div className="col-md-3">
    //   <div className="card my-3">
    //     <div className="card-body">
    //       <h5 className="card-title">{allocated.category}</h5>
    //       <p className="card-text">{allocated.nameOfTheFood}</p>
    //       <p className="card-text">{allocated.noOfPeople}</p>
    //       <p className="card-text">{allocated.timeOfCookedFood}</p>
    //       <p className="card-text">{allocated.address}</p>
    //       <p className="card-text">{allocated.note}</p>
    //       <p className="card-text">{allocated.agent}</p>
    //     </div>
    //     {/* <select className="form-select" aria-label="Default select example">
    //       <option selected>Allocate Agent</option>
    //       <option value="1">One</option>
    //       <option value="2">Two</option>
    //       <option value="3">Three</option>
    //     </select> */}
    //     {/* <button type="button" className="btn btn-primary btn-md btn-block my-2" onClick={() => {agentallocate(donate);}}>
    //       Update Status
    //     </button> */}
    //   </div>
    // </div>

    <article class="card__content grid">
      <header class="card__header">
        <div class="card__header-img">
          <img src={vdonatepic} alt="" class="card__header-img" />
        </div>

        <h1 class="card__header-title">Allocated Details</h1>
      </header>

      <ul class="card__list grid">
        <li class="card__list-item">
          <p class="card__list-description">
            <strong> Food Category : </strong>
          </p>

          <p class="card__list-description1">{allocated.category}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> Name of the Item : </strong>
          </p>

          <p class="card__list-description1">{allocated.nameOfTheFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong> How many people can consume?:</strong>
          </p>

          <p class="card__list-description1">{allocated.noOfPeople}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>When was it cooked? : </strong>
          </p>

          <p class="card__list-description1">{allocated.timeOfCookedFood}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Collection Address : </strong>
          </p>

          <p class="card__list-description1">{allocated.address}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Special Note : </strong>
          </p>

          <p class="card__list-description1">{allocated.note}</p>
        </li>
        <li class="card__list-item">
          <i class="uil uil-check card__list-icon"></i>
          <p class="card__list-description">
            <strong>Allocated Agent </strong>
          </p>

          <p class="card__list-description1">{allocated.agent}</p>
        </li>
      </ul>
    </article>
  );
};

export default AdminAllocateditem;
