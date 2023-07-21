import React from "react";
import "./App.css";
import UserListComponent from "./components/UserList/UserList";
import list from "./types/usersList";

function App() {
  return (
    <div>
      <UserListComponent users={list} elemPerPage={50} />
    </div>
  );
}

export default App;
