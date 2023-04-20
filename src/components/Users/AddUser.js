import React , {useState} from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import Card from "../UI/Card";

const AddUser = (props) => {
   
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
  
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }

  const ageChangehandler = event => {
    setEnteredAge(event.target.value);
  }


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangehandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
