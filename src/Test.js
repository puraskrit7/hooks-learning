import CallbackExample from "./HookExample/useCallBackExample/CallbackExample";
import ParentComponent from "./HookExample/useContextExample/ParentComponent";
import MemoExample from "./HookExample/useMemoExample/MemoExample";
import TodoComponent from "./HookExample/useReducerExample/TodoComponent";
import TextInputWithFocusButton from "./HookExample/useRefExample/TextInputWithFocusButton";


function Test() {
  return (
    <div style={{ padding: "100px", display:"flex", justifyContent:"center", flexDirection:"column" }}>
      <p style={{ color: "red", fontWeight: "bold" }}>
        This is useContext Example
      </p>
        <ParentComponent />
      <p style={{ color: "red", fontWeight: "bold" }}>
        This is useMemo Example
      </p>
      <MemoExample />
      <p style={{ color: "red", fontWeight: "bold" }}>
        This is useCallback Example
      </p>
      <CallbackExample />
      <p style={{ color: "red", fontWeight: "bold" }}>
        This is useRedcuer Example
      </p>
      <TodoComponent />
      <br></br>
      <br></br>
      <p style={{ color: "red", fontWeight: "bold" }}>This is useRef Example</p>
      <TextInputWithFocusButton />
    </div>
  );
}

export default Test;
