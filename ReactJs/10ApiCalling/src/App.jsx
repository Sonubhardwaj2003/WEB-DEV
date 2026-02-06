import React from "react";
import axios from 'axios'

function App() {
  {
    /* fetch method */
  }
  const getFetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };

  {
    /* axios method */
  }
  const getAxioshData = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
  
    console.log(response.data);
  };

  return (
    <>
      <div>
        <button onClick={getFetchData}>Api Cal for fetch</button>
        <button onClick={getAxioshData}>Api Call for axios</button>
      </div>
    </>
  );
}

export default App;
