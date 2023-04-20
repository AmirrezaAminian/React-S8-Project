import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={addUserHandle} />
      <UsersList users={usersList}  input = {input}/>
    </div>
  );
}

export default App;
