// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Amit");

  const handleClick = () => {
    setName(name === "Amit" ? "Rajan" : "Amit");
  };

  return (
    <div className="container">
      <h1>My name is  {name}</h1>
      <button className="toggle-btn" onClick={handleClick}>
        Change Name
      </button>
    </div>
  );
}
