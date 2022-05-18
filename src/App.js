import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.table(res.data);
        setListOfUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>USERS</h1>
      <UserList users={listOfUsers} />
    </div>
  );
}

export default App;