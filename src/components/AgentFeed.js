/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import AgentDonationitem from "./AgentDonationitem";

const AgentDonates = (props) => {
  const context = useContext(donateContext);
  let history = useHistory();
  const {
    agentdonations,
    getAgentAllocated,
    getAgentDelivered,
    updateDelivery,
  } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAgentAllocated();
      getAgentDelivered();
    } else {
      history.push("/agentlogin");
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [agentallocated, setAgentAllocated] = useState({
    id: "",
    acategory: "",
    anameOfTheFood: "",
    anoOfPeople: "",
    atimeOfCookedFood: "",
    aaddress: "",
    anote: "",
  });

  const agentallocate = (currentAgentAllocate) => {
    ref.current.click();

    setAgentAllocated(
      {
        id: currentAgentAllocate._id,
        acategory: currentAgentAllocate.category,
        anameOfTheFood: currentAgentAllocate.nameOfTheFood,
        anoOfPeople: currentAgentAllocate.noOfPeople,
        atimeOfCookedFood: currentAgentAllocate.timeOfCookedFood,
        aaddress: currentAgentAllocate.address,
        anote: currentAgentAllocate.note,
      }
      //currentDonate
    );
  };

  const handleClick = (e) => {
    console.log("Updating the donate...", value, agentallocated);
    refClose.current.click();
    updateDelivery(agentallocated.id, value);
    e.preventDefault();
  };

  const onChange = (e) => {
    setAgentAllocated({ ...agentallocated, [e.target.name]: e.target.value });
  };

  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Food Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="acategory"
                    name="acategory"
                    aria-describedby="emailHelp"
                    value={agentallocated.acategory}
                    onChange={onChange}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nameOfTheFood" className="form-label">
                    Name of the food item
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="anameOfTheFood"
                    name="anameOfTheFood"
                    value={agentallocated.anameOfTheFood}
                    onChange={onChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="noOfPeople" className="form-label">
                    How many people can consume?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="anoOfPeople"
                    name="anoOfPeople"
                    value={agentallocated.anoOfPeople}
                    onChange={onChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="timeOfCookedFood" className="form-label">
                    When is the food cooked?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="atimeOfCookedFood"
                    name="atimeOfCookedFood"
                    value={agentallocated.atimeOfCookedFood}
                    onChange={onChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Collection address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="aaddress"
                    name="aaddress"
                    value={agentallocated.aaddress}
                    onChange={onChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="note" className="form-label">
                    Special Note
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="anote"
                    name="anote"
                    value={agentallocated.anote}
                    onChange={onChange}
                    disabled
                  />
                </div>

                {/* <DropdownButton
                  id="dropdown-item-button"
                  title="Dropdown button"
                  onSelect={handleClick}
                >
                  <Dropdown.ItemText>Allocate Agent</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton> */}

                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleSelect}
                    // onClick={handleClick}
                    id="status"
                    name="status"
                    value={value}
                    defaultValue={""}
                  >
                    <option selected>Update Status of delivery</option>
                    <option value={"Delivered"}>Delivered</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <section class="container grid">
        <div class="card__container grid">
          {agentdonations.map((agentdonation) => {
            return (
              <AgentDonationitem
                key={agentdonation._id}
                agentallocate={agentallocate}
                agentdonation={agentdonation}
              />
            );
          })}
        </div>
      </section>

      {/* <div className="conatainer">
        <div className="row my-3">
          <h2>Delivered Donations</h2>
          {agentdelivers.map((agentdeliver) => {
            return (
              <DeliveredDonationitem
                key={agentdeliver._id}
                agentdeliver={agentdeliver}
              />
            );
          })}
        </div>
      </div> */}
    </>
  );
};

export default AgentDonates;
