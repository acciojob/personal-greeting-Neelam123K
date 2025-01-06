import React, { useState } from 'react';

function GreetingApp() {
  const [name, setName] = useState(""); 

  const handleInputChange = (event) => {
    setName(event.target.value); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter your name:</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
        style={{ padding: "10px", width: "200px", borderRadius: "5px" }}
      />
      {name && <h2>Hello {name}!</h2>}
    </div>
  );
}

export default GreetingApp;
