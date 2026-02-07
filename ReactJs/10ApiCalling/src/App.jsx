import React, { useState } from "react";
import axios from 'axios'

function App() {

  const [fatchImage,setfatchImage] = useState([])
  const [axiosImage,setAxiosImage] = useState([]);
  {
    /* fetch method */
  }
  const getFetchData = async () => {
    const response = await fetch.get("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await response.json();
    setfatchImage(data)
    console.log(data);
  };

  {
    /* axios method */
  }
  const getAxiosData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setAxiosImage(response.data)
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
