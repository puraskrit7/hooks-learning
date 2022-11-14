import { useCallback, useEffect, useState } from "react";

const CallbackExample = () => {
  let [totalCustomer, setTotalCustomer] = useState(0);
  const [newCustomer, setNewCustomer] = useState(0);
  const [oldCustomer, setOldCustomer] = useState(0);

  const totalAddedCustomers = useCallback(() => {
    setTotalCustomer(newCustomer + oldCustomer);
  }, [newCustomer, oldCustomer]);

  useEffect(() => {
    totalAddedCustomers();
  }, [newCustomer, oldCustomer, totalAddedCustomers]);

  return (
    <>
      <button onClick={() => setNewCustomer(newCustomer + 1)}>
        New Customer +
      </button>
      <p>New customer: {newCustomer}</p>
      <button onClick={() => setOldCustomer(oldCustomer + 1)}>
        Old Customer +
      </button>
      <p>Old Customer: {oldCustomer}</p>
      <p>
        Total Customers: <b>{totalCustomer}</b>
      </p>
    </>
  );
};

export default CallbackExample;
