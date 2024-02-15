import { useState, useEffect } from "react";
import StudContext from "./StudContext";

// eslint-disable-next-line react/prop-types
function StudContextProvider({ children }) {
  useEffect(() => {
    fetchAllStuds();
  }, []);

  const [studs, setStuds] = useState([]);

  const fetchAllStuds = async () => {
    try {
      const response = await fetch("http://localhost:8080/students", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      setStuds(json);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (data) => {
    try {
      const response = await fetch(`http://localhost:8080/update/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: {
          id: data.id,
          fname: data.fname,
          lname: data.lname,
          dob: data.dob,
          country: data.country,
          address: data.address,
          program: data.program,
          maritalStatus: data.maritalStatus,
        },
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    fetchAllStuds();
  };

  const Delete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:8080/delete/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    fetchAllStuds();
  };

  return (
    <StudContext.Provider
      value={{ studs, setStuds, fetchAllStuds, update, Delete }}
    >
      {children}
    </StudContext.Provider>
  );
}

export default StudContextProvider;
