import React, { useState } from "react";
import Card from "../UI/Card";
import clasess from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={clasess.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
