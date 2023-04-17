import React from "react";
import Card from "../UI/Card";
import clasess from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {

    const addUserHandler = (e) => {
        e.preventDefault();

    }

    return (
      <Card className = {clasess.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number"></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    );
}

export default AddUser