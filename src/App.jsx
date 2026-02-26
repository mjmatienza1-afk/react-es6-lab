import React from "react";
import UserList from "./UserList.jsx"; 

function App() {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;