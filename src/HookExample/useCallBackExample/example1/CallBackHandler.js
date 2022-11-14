import { useCallback, useState } from "react";
import Todos from "./Todos";


// Here Now the Todos component will only re-render when the todos prop changes.

// The useCallback and useMemo Hooks are similar. 
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

const CallBackHandler = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    },[]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallBackHandler;
