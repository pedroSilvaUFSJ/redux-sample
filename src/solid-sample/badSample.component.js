import React, { useEffect, useReducer, useState } from "react";

const initialState = { isLoading: true };

// COMPLEX STATE MANAGEMENT
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true };
    case "FINISHED":
      return { isLoading: false };
    default:
      return state;
  }
}

export const SingleResponsibilityPrinciple = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const showDetails = (userId) => {
    const user = filteredUsers.find(({ id }) => id === userId);
    alert(user.contact);
  };

  // REMOTE DATA FETCHING
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FINISHED" });
        setUsers(json);
      });
  }, []);

  // PROCESSING DATA
  useEffect(() => {
    const filteredValues = users.map(({ id, name, phone, email }) => {
      return {
        id,
        name,
        contact: `${phone} , ${email}`,
      };
    });
    setFilteredUsers(filteredValues);
  }, [users]);

  // COMPLEX UI RENDERING
  return (
    <>
      <div>Users List </div>
      <div> Loading state: {state.isLoading ? "Loading" : "Success"} </div>
      {users.map(({ id, name, email }) => {
        return (
          <div key={id} onClick={() => showDetails(id)}>
            <div>{name} </div>
            <div> {email} </div>
          </div>
        );
      })}
    </>
  );
};
