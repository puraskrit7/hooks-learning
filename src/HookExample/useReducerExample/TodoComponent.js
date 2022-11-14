import { useReducer, useState } from "react";



// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// Syntax
// The useReducer Hook accepts two arguments.

// useReducer(<reducer>, <initialState>)

// The reducer function contains your custom state logic and the initialStatecan be a simple value 
// but generally will contain an object.

// The useReducer Hook returns the current stateand a dispatchmethod.

const initialState = {
  todoList: [],
};

const init = () => initialState;

const reducer = (state, action) => {
  switch (action.type) {
    case "AddItem":
      return {
        todoList: [...state.todoList, action.payload],
      };
    case "DeleteItem":
      return {
        todoList: state.todoList.filter(
          (listItem) => listItem !== action.payload
        ),
      };
    case "clearAll":
      return init();
    default:
      return state;
  }
};

const TodoComponent = () => {
  const [state, dispatch] = useReducer(reducer, { todoList: [] }, init);
  const [todoItem, setTodoItem] = useState("");

  return (
    <>
      <h5>To do List</h5>
      <label htmlFor="add-item">Add an Item</label>
      <input
        value={todoItem}
        id="add-item"
        onChange={(event) => setTodoItem(event.target.value)}
      />
      <button onClick={() => dispatch({ type: "AddItem", payload: todoItem })}>
        Add Item
      </button>
      {console.log(todoItem)}
      <button onClick={() => dispatch({ type: "clearAll" })}>Reset</button>
      {!!state.todoList.length &&
        state.todoList.map((listItem) => (
          <p
            style={{
              minHeight: "20px",
              backgroundColor: "aliceblue",
            }}
          >
            {listItem}{" "}
            <button
              style={{ color: "red" }}
              onClick={() =>
                dispatch({ type: "DeleteItem", payload: listItem })
              }
            >
              Delete
            </button>
          </p>
        ))}
    </>
  );
};

export default TodoComponent;
