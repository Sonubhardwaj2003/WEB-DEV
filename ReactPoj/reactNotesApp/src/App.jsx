/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(tasks));
  }, [tasks]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      details: details,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setdetails("");
  };

  const [deletingIndex, setDeletingIndex] = useState(null);

  const deleteTask = (index) => {
    setDeletingIndex(index);

    setTimeout(() => {
      setTasks(tasks.filter((_, i) => i !== index));
      setDeletingIndex(null);
    }, 300);
  };

  return (
    <div className="bg-black h-screen w-full overflow-x-hidden text-white flex flex-col">

      {/*navbar section */}
      <nav
        className="
          w-full px-6 py-4
          flex justify-between items-center
          bg-white/10 backdrop-blur-lg
          border-b border-white/20
        "
      >
        <h1 className="text-2xl font-bold tracking-wide">📝 Notes</h1>

        <span className="text-sm text-gray-300">
          Total Notes: {tasks.length}
        </span>
      </nav>

      {/*create notes section */}
      <div className="bg-black w-full text-white flex justify-around flex-wrap">
        <div className="w-3/5">
          <form
            className=" h-full w-full flex flex-col gap-7 pt-10 lg:pl-10"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left ">
              ✍️CREATE A NOTE
            </h1>

            <input
              type="text"
              name="heading"
              placeholder="Enter Notes Heading"
              className="border-2 rounded p-3 outline-none"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <textarea
              name="details"
              placeholder="Enter Details...."
              className="border-2 rounded p-3 outline-none h-40"
              value={details}
              onChange={(e) => {
                setdetails(e.target.value);
              }}
            ></textarea>

            <button
              className="border-2 rounded-lg px-6 outline-none text-3xl font-bold text-black bg-white transition-all duration-300
    hover:bg-gray-200 hover:scale-105 active:scale-98"
            >
              Add
            </button>
          </form>
        </div>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.moQBdGeGjkRkVWSr2iWuZgHaHa?pid=Api&P=0&h=180"
          alt="note img"
          className="w-48 h-48 md:w-70 md:h-70 rounded-full bg-white lg:m-20 m-10"
        />
      </div>

      {/*your notes section */}
      <div className="border-t-2 md:mt-10 px-15 py-10 bg-black">
        <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left mb-8 animate-faeIn">
          📌YOUR NOTES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {tasks.map(function (ele, idx) {
            return (
              <div
                key={idx}
                className="
                    relative p-5 rounded bg-[url('/note-bg.png')] bg-cover backdrop-blur-lg
                    border border-white/20 text-black shadow-xl
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-2xl
                    animate-fadeIn"
              >
                <h2 className="font-bold text-3xl mb-2 mt-8 lg:mt-4">
                  {ele.title}
                </h2>
                <p className="text-xl text-gray-800 ml-2">{ele.details}</p>
                <button
                  onClick={() => deleteTask(idx)}
                  className="
                    absolute top-0 right-0 border bg-gray-500 rounded-tr px-1 p-0.5
                    text-black text-xl font-extrabold
                    transition-all duration-300
                    hover:text-red-800 hover:scale-105
                  "
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/*footer section */}
      <footer className="mt-auto py-4 text-center text-gray-400 text-sm">
        Built using React & Tailwind
      </footer>
    </div>
  );
}

export default App;
