import React from 'react';

function Stats({ itemlist }) {
  // Calculate the total number of items in the list
 
  // const totalItems = itemlist.reduce((acc, item) => acc + Number(item.Number===1), 0); // Summing itemNumber

  return (
    <div className="stats">
      <p>
        You have {itemlist.length} item(s) in your list and you already packaged 0 (0%).[by Zubair Hashmi]
      </p>
    </div>
  );
}

export default Stats;
