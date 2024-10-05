import React, { useState } from 'react';
import Logo from './component/logo/Logo';
import Form from './component/Form/Index';
import Stats from './component/Stats';
import Package from './component/Packaging';
import './App.css';

function App() {
  const [itemlist, setitemlist] = useState([]); // State to hold the items

  return (
    <div className='main'>
      <Logo />
      <Form itemlist={itemlist} setitemlist={setitemlist} /> {/* Pass state as props */}
      <Package itemlist={itemlist} setitemlist={setitemlist} /> {/* Pass state as props */}
      <Stats itemlist={itemlist}/>
    </div>
  );
}

export default App;
