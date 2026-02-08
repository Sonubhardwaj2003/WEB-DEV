/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=35`,
      );

      setUserData(response.data);
    } catch (err) {
      setError("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  {
    loading && <h3 className="text-gray-400">Loading...</h3>;
  }
  {
    error && <h3 className="text-red-400">{error}</h3>;
  }

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  const filteredData = userdata.filter((ele) =>
    ele.author.toLowerCase().includes(search.toLowerCase()),
  );

  let printUserdata = <h3 className="text-gray-400 text-sm">Loading.....</h3>;

  if (userdata.length > 0) {
    printUserdata = filteredData.map(function (ele, idx) {
      return (
        <div key={idx}>
          <a
            href={ele.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View image by ${ele.author}`}
          >
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                loading="lazy"
                src={ele.download_url}
                alt="Img"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="font-bold text-lg">{ele.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <>
      <div
        className={`min-h-screen transition-colors
        ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"}`}
      >
        {/*Navbar section*/}
        <Navbar
          page={index}
          search={search}
          setSearch={setSearch}
          theme={theme}
          setTheme={setTheme}
        />

        {/*Top heading
        <h1 className="fixed font-extrabold bg-gray-400 text-black px-3 m-4 opacity-65">
          Page {index}
        </h1>*/}

        {/*Gallery section*/}
        <div className="pt-24 gap-6 flex  flex-wrap justify-center">
          {printUserdata}
        </div>

        {/*Button section*/}
        <div className="flex  flex-wrap justify-center">
          <button
            disabled={index === 1}
            className={`border px-4 m-10 rounded 
              ${index === 1 ? "opacity-30 cursor-not-allowed" : " cursor-pointer"}
              ${theme === "dark" ? "bg-black text-white  hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-500"}`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
              }
              setUserData([]);
            }}
          >
            {" "}
            Previous Page
          </button>

          <button
            className={`border px-4 m-10 cursor-pointer rounded ${theme === "dark" ? "bg-black text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-500"}`}
            onClick={() => {
              setUserData([]);
              setIndex(index + 1);
            }}
          >
            {" "}
            Next Page
          </button>
        </div>

        {/*footer section*/}
        {/*
        <div className="flex justify-center text-gray-500 pl-2">Build using React (Api Calling , useState , useEffect) and Tailwind </div>*/}
      </div>
    </>
  );
}

export default App;
