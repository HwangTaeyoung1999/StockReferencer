import React from 'react';
import { ReactDOM } from 'react';
import background from"./img/stonkperson.jpg"; 



function App() {
  return (
  <div className="Background">
    <img src={background} alt="stonk"/>
    <div className="Search">
      <div className="input">
        <input type="text" placeholder="Search.."/>
               
      </div>
    </div>
  </div>
  );
}

export default App;
