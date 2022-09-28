import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };
  render() {
    return (
      <div>
        <h1>Class component</h1>
      </div>
    );
  }
}

export default Counter;

// const Counter = () => {
//   const [value, setValue] = useState(0);
//   const formatCOunt = () => {
//     return value === 0 ? `Null` : value;
//   };
//   const styles = {
//     fontSize: 15,
//     fontweight: "bold",
//   };

//   // Get Batch classes... Rendering classes dynamically
//   let getBatchClasses = () => {
//     let classes = "badge m-2 badge-";
//     classes += value === 0 ? "warning" : value <= 0 ? "danger" : "primary";
//     return classes;
//   };

//   const listItems = ["Magma", "React", "ts", "py"];

//   //...
//   return (
//     <div>
//       <button
//         className="btn btn-danger m-1 btn-sm"
//         onClick={() => setValue(value - 1)}
//       >
//         Decrement
//       </button>
//       <h1 style={styles} className={getBatchClasses()}>
//         {formatCOunt()}
//       </h1>
//       <button
//         className="btn btn-success m-1 btn-sm"
//         onClick={() => setValue(value + 1)}
//       >
//         Increment
//       </button>
//       {/*Rendering list */}
//       <ul>
//         {listItems.map((item, id) => (
//           <li key={id}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Counter;
