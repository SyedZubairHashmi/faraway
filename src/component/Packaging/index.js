import React from "react";

function Package({ itemlist, setitemlist }) {
  // Function to remove an item from the list (optional)
  const removeItem = (index) => {
    const updatedList = itemlist.filter((item, i) => i !== index); // Remove item by index
    setitemlist(updatedList); // Update parent state
  };

  return (
    <div className="package">
      <div className="itemslist">
        {itemlist.map((item, index) => (
          <ul key={index}>
            <input type="checkbox" className="checkbox"></input>
            <span>
              {item.itemNumber}  {item.inputText}
            </span>
            <span onClick={() => removeItem(index)}>
              <span className="cross">X</span>
            </span>{" "}
            {/* Remove item */}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Package;
