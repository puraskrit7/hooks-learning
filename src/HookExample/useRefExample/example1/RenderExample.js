import { useState, useEffect, useRef } from "react";

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// If we tried to count how many times our application renders using the useState Hook,
// we would be caught in an infinite loop since this Hook itself causes a re - render.

// To avoid this, we can use the useRef Hook.
function RenderExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default RenderExample;
