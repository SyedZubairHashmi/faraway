import React, { useState } from 'react';   //>>here we import usestate

function Form({ itemlist, setitemlist }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array which print in option for item number

  const [inputText, setInputText] = useState("");    // Input text state
  const [itemNumber, setitemNumber] = useState(0);    // Selected item number state

  function addhandler() {               //  function for to store item number and item text and make object
    const newItem = {
      itemNumber,
      inputText,
    };

    const updatedList = [...itemlist, newItem]; // make new array to spread prop(itemlist)  and to add object which store number&text.
    setitemlist(updatedList); // Update parent state in app.js by passing new array
  }

  return (
    <div className="form">
      <p>What do you need for your trip?</p>
      <select onChange={(e) => setitemNumber(e.target.value)} value={itemNumber}>
        {arr.map((num, index) => (
          <option key={index} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={inputText}
        placeholder="Enter item"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addhandler}>ADD</button>
    </div>
  );
}

export default Form;
