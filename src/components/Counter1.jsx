import React, { useState } from "react";

const Counter1 = () => {
  const [value, setValue] = useState(0);

  // Get Batch classes... Rendering classes dynamically

  //handlesubmit
  const handleIncremaent = () => {
    setValue(value + 1);
  };
  const listItems = [];

  function conditionalRendering() {
    if (listItems.length === 0) return <p>there are not items</p>;
    return (
      <ul>
        {listItems.map((items, id) => (
          <li key={id}>{items}</li>
        ))}
      </ul>
    );
  }
  //...
  return (
    <div>
      {/*Conditional Rendering list */}
      {listItems.length === 0 && "Please create a new List"}
      {conditionalRendering()}
      <h1 className="badge badge-primary badge-sm">{value}</h1>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncremaent}>
        Increment
      </button>
    </div>
  );
};

export default Counter1;
