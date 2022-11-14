import React, { useContext } from "react";
import { UserDetailContext } from "./ParentComponent";
import SubChildComponent from "./SubChildComponent";

function ChildComponent() {
  const contextData = useContext(UserDetailContext);
  return (
    <div>
        <h2>This is Child Component  '{contextData.name}'</h2>
        <hr />
        <SubChildComponent />
    </div>
  );
}
export default ChildComponent;