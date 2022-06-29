/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import donateContext from "../context/donations/donateContext";
import AdminDonateitem from "./AdminDonationitem";

// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

const Donates = (props) => {
  const context = useContext(donateContext);
  let history = useHistory();
  const {
    donates,
    getAdminFeed,
    getAllAgents,
    agents,
    removeDonate,
    getAllocated,
    getAllDelivered,
  } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAdminFeed();
      getAllAgents();
      getAllocated();
      getAllDelivered();
    } else {
      history.push("/adminlogin");
    }
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [donate, setDonate] = useState({
    id: "",
    ecategory: "",
    enameOfTheFood: "",
    enoOfPeople: "",
    etimeOfCookedFood: "",
    eaddress: "",
    enote: "",
  });

  const allocate = (currentDonate) => {
    ref.current.click();

    setDonate(
      {
        id: currentDonate._id,
        ecategory: currentDonate.category,
        enameOfTheFood: currentDonate.nameOfTheFood,
        enoOfPeople: currentDonate.noOfPeople,
        etimeOfCookedFood: currentDonate.timeOfCookedFood,
        eaddress: currentDonate.address,
        enote: currentDonate.note,
      }
      //currentDonate
    );
  };

  const handleClick = async (e) => {
    console.log("Updating the donate...", value, donate);
    refClose.current.click();
    removeDonate(donate.id, value);
    await getAllocated();
    e.preventDefault();
  };

  const onChange = (e) => {
    setDonate({ ...donate, [e.target.name]: e.target.value });
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
                Allocate Donation to Agent
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
                    id="ecategory"
                    name="ecategory"
                    aria-describedby="emailHelp"
                    value={donate.ecategory}
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
                    id="enameOfTheFood"
                    name="enameOfTheFood"
                    value={donate.enameOfTheFood}
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
                    id="enoOfPeople"
                    name="enoOfPeople"
                    value={donate.enoOfPeople}
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
                    id="etimeOfCookedFood"
                    name="etimeOfCookedFood"
                    value={donate.etimeOfCookedFood}
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
                    id="eaddress"
                    name="eaddress"
                    value={donate.eaddress}
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
                    id="enote"
                    name="enote"
                    value={donate.enote}
                    onChange={onChange}
                    disabled
                  />
                </div>

                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleSelect}
                    // onClick={handleClick}
                    id="agent"
                    name="agent"
                    value={value}
                    defaultValue={""}
                  >
                    <option selected>Allocate Agent</option>
                    {agents.map((agent, key) => {
                      return (
                        <option key={key} value={agent._id}>
                          {agent.name}
                        </option>
                      );
                    })}
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
                Allocate Agent
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
          {donates.map((donate) => {
            return (
              <AdminDonateitem
                key={donate._id}
                allocate={allocate}
                donate={donate}
              />
            );
          })}
        </div>
      </section>

      {/* <div className="conatainer">
        <div className="row my-3">
          <h2>Allocated Donations</h2>
          {allocates.map((allocated) => {
            return (
              <AdminAllocateditem key={allocated._id} allocated={allocated} />
            );
          })}
        </div>
      </div> */}

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

export default Donates;
