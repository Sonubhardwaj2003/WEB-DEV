import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";
// import './App.css'

function App() {
  //usestate is used for updation (change ) in method or data ,Returns a stateful value, and a function to update it.
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [passward, setPassward] = useState("");

  const passwaddRef = useRef(null);

  //useCallback is used for optimization ,which store the ata in chache memory(previously used)
  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassward(pass);
  }, [length, number, character, setPassward]);

  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const PasswordCopied = useCallback(() => {
    passwaddRef.current?.focus();
    passwaddRef.current?.select();
    window.navigator.clipboard.writeText(passward);

    setCopyBtnText("Copied!");

    setTimeout(() => {
      setCopyBtnText("Copy");
    }, 2000); // Resets after 2 seconds
  }, [passward]);

  //useEffect is used for running purpose,Accepts a function that contains imperative, possibly effectful code.
  useEffect(() => {
    passwardGenerator();
  }, [length, number, character, passwardGenerator]);

  return (
    <>
      {/* <h1 className=" text-4xl text-center text-white ">Password Generator</h1> */}
      <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-4 my-10 text-orange-500 bg-gray-800">
        <h1 className=" text-2xl text-center text-white pb-4 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-1">
          <input
            type="text"
            value={passward}
            className="outline-none rounded-l-xl w-full py-2 px-2"
            placeholder="Password"
            readOnly
          />

          <button
            className="rounded-r-xl hover:bg-blue-900 bg-blue-800 text-white p-2 text-xl"
            onClick={PasswordCopied}
          >
            {copyBtnText}
          </button>
        </div>

        <div className="flex shadow gap-4 rounded-lg overflow-hidden mt-2">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }} //if tue the set to false or vice versa
              id="numberInput"
            />

            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }} //if tue the set to false or vice versa
              id="charInput"
            />

            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
