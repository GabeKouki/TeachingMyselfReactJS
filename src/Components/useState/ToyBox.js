import React, { useState } from "react";
import './ToyBox.css';

function ToyBox() {
  // Define a new "state" variable called "selectedToy"
  const [selectedToy, setSelectedToy] = useState("doll");

  // Function to change the "selectedToy" state
  function changeToy(newToy) {
    setSelectedToy(newToy);
  }

  return (
    <div className="useState">
        <h1>practice with useState:</h1>


      <p>Selected Toy: {selectedToy}</p>
      <button onClick={() => changeToy("car")}>Change to car</button>
      <button onClick={() => changeToy("doll")}>Change to doll</button>
      <button onClick={() => changeToy("jack-in-the-box")}>Change to Jack-In-The-Box</button>

      <p>When you click the button, an onclick event listener updates the state of the selectedToy variable by invoking the setSelectedToy function on selectedToy</p>
    </div>
  );
}

export default ToyBox;