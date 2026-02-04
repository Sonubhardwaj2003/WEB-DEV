import React from "react";

function App() {
  return (
    <div className="bg-black h-screen w-screen text-white flex justify-around">
      <div className="w-3/5">
        <form  className=" h-full w-full flex flex-col gap-7 p-30">
          <input 
            type="text" 
            name="heading"
            placeholder="Enter Notes heading"
            className="border-2 rounded p-3 outline-none"
          />
          <textarea 
            name="details"
            placeholder="Enter Details...."
            className="border-2 rounded p-3 outline-none h-40"
          ></textarea>

          <button
            className="border-2 rounded p-3 outline-none text-black bg-white"
          >Add</button>
        </form>
      </div>

      <img 
        src="https://tse3.mm.bing.net/th/id/OIP.moQBdGeGjkRkVWSr2iWuZgHaHa?pid=Api&P=0&h=180" alt="note img" 
        className="w-90 h-90 rounded-full bg-white m-25 "
      />
    </div>
  );
}

export default App;
