import { useReducer } from "react";


const Example = () => {
    const initialState = 0;
    const reducer = (state, action) => {
      switch (action.type) {
        case "Increase":
          return state + action.payload;
        case "Decrease":
          return state - action.payload;
        default:
          return state;
      }
    };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "Increase", payload: 5 })}>
        Inscrease
      </button>
      <button onClick={() => dispatch({ type: "Decrease", payload: 5 })}>
        Decrease
      </button>
      <>{state}</>
    </>
  );
};
export default Example;
