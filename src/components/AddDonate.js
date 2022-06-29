import React, { useContext, useState } from "react";
import donateContext from "../context/donations/donateContext";
import "./addDonate.css";

function AddDonate(props) {
  const context = useContext(donateContext);
  const { addDonate } = context;

  const [donate, setDonate] = useState({
    category: "",
    nameOfTheFood: "",
    noOfPeople: "",
    timeOfCookedFood: "",
    address: "",
    note: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addDonate(
      donate.category,
      donate.nameOfTheFood,
      donate.noOfPeople,
      donate.timeOfCookedFood,
      donate.address,
      donate.note
    );
    setDonate({
      category: "",
      nameOfTheFood: "",
      noOfPeople: "",
      timeOfCookedFood: "",
      address: "",
      note: "",
    });
    props.showAlert("Donated Successfully", "success");
  };

  const onChange = (e) => {
    setDonate({ ...donate, [e.target.name]: e.target.value });
  };
  return (
    // <div className="container my-3">
    //   <h2>Add a Note</h2>
    //   <form className="my-3">
    //     <div className="mb-3">
    //       <label htmlFor="category" className="form-label">
    //         Food Category
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="category"
    //         name="category"
    //         aria-describedby="emailHelp"
    //         value={donate.category}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="nameOfTheFood" className="form-label">
    //         Name of the food item
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="nameOfTheFood"
    //         name="nameOfTheFood"
    //         value={donate.nameOfTheFood}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="noOfPeople" className="form-label">
    //         How many people can consume?
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="noOfPeople"
    //         name="noOfPeople"
    //         value={donate.noOfPeople}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="timeOfCookedFood" className="form-label">
    //         When is the food cooked?
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="timeOfCookedFood"
    //         name="timeOfCookedFood"
    //         value={donate.timeOfCookedFood}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="address" className="form-label">
    //         Collection address
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="address"
    //         name="address"
    //         value={donate.address}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label htmlFor="note" className="form-label">
    //         Special Note
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="note"
    //         name="note"
    //         value={donate.note}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <button type="submit" className="btn btn-primary" onClick={handleClick}>
    //       Donate
    //     </button>
    //   </form>
    // </div>

    <div class="formfont">
      <form action="index.html" autocomplete="off" class="donateform">
        <div class="formwrapper">
          <div class="title">Donate Food</div>
          <div class="form">
            <div class="inputfield">
              <label>
                <strong>Food Category</strong>
              </label>
              <div class="custom_select" required>
                <select
                  id="category"
                  name="category"
                  value={donate.category}
                  onChange={onChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>
            </div>
            <div class="inputfield">
              <label>
                <strong>Name of the Item</strong>
              </label>
              <input
                type="text"
                class="input"
                id="nameOfTheFood"
                name="nameOfTheFood"
                value={donate.nameOfTheFood}
                onChange={onChange}
                required
              />
            </div>
            <div class="inputfield">
              <label>
                <strong>How many people can consume?</strong>
              </label>
              <input
                type="text"
                class="input"
                id="noOfPeople"
                name="noOfPeople"
                value={donate.noOfPeople}
                onChange={onChange}
                required
              />
            </div>

            <div class="inputfield" required>
              <label>
                <strong>When was it cooked?</strong>
              </label>
              <div class="custom_select">
                <select
                  id="timeOfCookedFood"
                  name="timeOfCookedFood"
                  value={donate.timeOfCookedFood}
                  onChange={onChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Yesterday">Yesterday</option>
                  <option value="Today">Today</option>
                </select>
              </div>
            </div>

            <div class="inputfield">
              <label>
                <strong>Collection Address</strong>
              </label>
              <input
                type="text"
                class="input"
                id="address"
                name="address"
                value={donate.address}
                onChange={onChange}
                required
              />
            </div>
            <div class="inputfield">
              <label>
                <strong>Special Note</strong>
              </label>
              <input
                type="text-area"
                class="input"
                id="note"
                name="note"
                value={donate.note}
                onChange={onChange}
                required
              />
            </div>

            <div class="inputfield">
              <input
                type="submit"
                value="Donate Now"
                onClick={handleClick}
                class="Donate-btn"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDonate;
