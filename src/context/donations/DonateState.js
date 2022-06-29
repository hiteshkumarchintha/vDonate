import DonateContext from "./donateContext";
import { useState } from "react";

const DonateState = (props) => {
  const host = "http://localhost:5000";
  const donatesInitial = [];
  const agentsInitial = [];
  const allocatedInitial = [];
  const agentDonationsInitiial = [];
  const agentDeliveredInitiial = [];
  const [donates, setDonates] = useState(donatesInitial);
  const [agents, setagents] = useState(agentsInitial);
  const [allocates, setAllocates] = useState(allocatedInitial);
  const [agentdonations, setAgentAllocates] = useState(agentDonationsInitiial);
  const [agentdelivers, setAgentDelivers] = useState(agentDeliveredInitiial);

  // Get all Donates
  const getDonates = async () => {
    // API Call
    const response = await fetch(`${host}/api/donations/fetchalldonations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setDonates(json);
  };

  // Get Admin Feed
  const getAdminFeed = async () => {
    // API Call
    const response = await fetch(
      `${host}/api/donations/admin/fetchalldonations`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setDonates(json);
  };

  // Get All Agents
  const getAllAgents = async () => {
    // API Call
    const response = await fetch(`${host}/api/donations/admin/fetchallagents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setagents(json);
  };

  // Add a donate
  const addDonate = async (
    category,
    nameOfTheFood,
    noOfPeople,
    timeOfCookedFood,
    address,
    note
  ) => {
    // API Call
    const response = await fetch(`${host}/api/donations/adddonation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        category,
        nameOfTheFood,
        noOfPeople,
        timeOfCookedFood,
        address,
        note,
      }),
    });

    const donate = await response.json();
    setDonates(donates.concat(donate));
  };

  // Remove a Donate
  const removeDonate = async (id, aid) => {
    // API Call
    const response = await fetch(
      `${host}/api/donations/admin/removeddonation/${id}/${aid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = response.json();
    const newDonates = donates.filter((donate) => {
      return donate._id !== id;
    });
    setDonates(newDonates);
    console.log(json);
  };

  // Get all allocated donations
  const getAllocated = async () => {
    // API Call
    const response = await fetch(`${host}/api/donations/admin/fetchallocated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    // const json = response.json();
    // const newAllocated = allocates.find();
    // setAllocates(newAllocated);
    // console.log(json);

    // const donate = await response.json();
    // setDonates(donates.concat(donate));
    console.log(response);
    const json = await response.json();
    console.log(json);
    setAllocates(json);
  };

  // Get all agent allocated donations
  const getAgentAllocated = async () => {
    // API Call
    const response = await fetch(`${host}/api/donations/agent/agentallocated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    // const json = response.json();
    // const newAllocated = allocates.find();
    // setAllocates(newAllocated);
    // console.log(json);

    // const donate = await response.json();
    // setDonates(donates.concat(donate));

    const json = await response.json();
    console.log(json);
    setAgentAllocates(json);
  };

  // Get all agent delivered donations
  const getAllDelivered = async () => {
    // API Call
    const response = await fetch(
      `${host}/api/donations/agent/fetchalldelivered`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setAgentDelivers(json);
  };

  // Get all agent delivered donations
  const getAgentDelivered = async () => {
    // API Call
    const response = await fetch(`${host}/api/donations/agent/agentdelivered`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setAgentDelivers(json);
  };

  // Update Delivery status
  const updateDelivery = async (id, dstatus) => {
    // API Call
    const response = await fetch(
      `${host}/api/donations/agent/removedagentdonation/${id}/${dstatus}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = response.json();
    const newDelivery = agentdelivers.filter((agentdelivers) => {
      return agentdelivers._id !== id;
    });
    setAgentDelivers(newDelivery);
    console.log(json);
  };

  //

  // // Edit a Note
  // const editNote = async (id, title, description, tag) => {
  //   // API Call
  //   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
  //     },
  //     body: JSON.stringify({title, description, tag})
  //   });
  //   const json = response.json();

  //   // Logic to edit in client
  //   for (let index = 0; index < notes.length; index++) {
  //     const element = notes[index];
  //     if (element._id === id) {
  //       element.title = title;
  //       element.description = description;
  //       element.tag = tag;
  //     }

  //   }
  // }

  return (
    <DonateContext.Provider
      value={{
        donates,
        agents,
        allocates,
        agentdonations,
        agentdelivers,
        addDonate,
        getDonates,
        getAdminFeed,
        getAllAgents,
        removeDonate,
        getAllocated,
        getAgentAllocated,
        getAllDelivered,
        getAgentDelivered,
        updateDelivery,
      }}
    >
      {props.children}
    </DonateContext.Provider>
  );
};

export default DonateState;
