import React from "react";
import axios from 'axios'

function App() {
  {
    /* fetch method */
  }
  const getFetchData = async () => {
    const response = await fetch.get("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await response.json();
    console.log(data);
  };

  {
    /* axios method */
  }
  const getAxiosData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
  
    console.log(response.data);
  };

  return (
    <>
      <div>
        <button onClick={getFetchData}>Api Cal for fetch</button>
        <button onClick={getAxiosData}>Api Call for axios</button>
      </div>
    </>
  );
}

export default App;
