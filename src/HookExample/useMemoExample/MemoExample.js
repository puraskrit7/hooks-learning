import { useMemo, useState } from "react";


// Think of memoization as caching a value so that it does not need to be recalculated.

// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
const MemoExample = () => {
  const [isYes, setIsYes] = useState(false);
  const showStatus = (status) => (status ? "Great!" : "Oh no..");

  const showStatusValue = useMemo(() => showStatus(isYes), [isYes]);
  return (
    <>
      <button onClick={() => setIsYes(true)}>Yes</button>
      <button onClick={() => setIsYes(false)}>No</button>
      <p>{showStatusValue}</p>
    </>
  );
};

export default MemoExample;
