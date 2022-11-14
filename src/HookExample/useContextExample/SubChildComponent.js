import React, { useContext } from "react";
import { UserDetailContext } from "./ParentComponent";

function SubChildComponent() {
  const contextData = useContext(UserDetailContext);
  if (contextData) {
    return (
      <div>
          <h3>This is Sub Child Component</h3>
          <h4>User Name: {contextData.name}</h4>
          <h4>User Age: {contextData.age}</h4>
      </div>
    );
  }
}
export default SubChildComponent;
