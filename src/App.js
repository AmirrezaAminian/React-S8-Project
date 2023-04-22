import { Fragment } from "react";
import React, { useState }  from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [input, setInput] = useState(false);


  const addUserHandle = function (UName, UAge) {
    setUsersList((prevUsersList) => {
      setInput(true)
      return [
        ...prevUsersList,
        { name: UName, age: UAge, id: Math.random() + "" },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandle} />
      <UsersList users={usersList}  input = {input}/>
    </Fragment>
  );
}

export default App;
