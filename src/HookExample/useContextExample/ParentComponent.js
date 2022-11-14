import React from "react";
import ChildComponent from "./ChildComponent";

export const UserDetailContext = React.createContext(null);
function ParentComponent() {
  const userDetails = {
    name: "Mayank",
    age: 30,
  };
  return (
    <UserDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent />
    </UserDetailContext.Provider>
  );
}

export default ParentComponent;
