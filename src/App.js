import React, { useState } from "react";
import "./App.css";

import Icons from "./components/Icons.js";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsArray = new Array(9).fill("empty");

function App() {
  const [winner, setWinner] = useState("");
  const [isCross, setIsCross] = useState(true);

  const checkIsWinner = (winner) => {
    if (
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2] &&
      itemsArray[0] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[0]}`);
    } else if (
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5] &&
      itemsArray[3] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[3]}`);
    } else if (
      itemsArray[6] === itemsArray[7] &&
      itemsArray[6] === itemsArray[8] &&
      itemsArray[6] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[6]}`);
    } else if (
      itemsArray[0] === itemsArray[3] &&
      itemsArray[0] === itemsArray[6] &&
      itemsArray[0] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[0]}`);
    } else if (
      itemsArray[1] === itemsArray[4] &&
      itemsArray[1] === itemsArray[7] &&
      itemsArray[1] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[1]}`);
    } else if (
      itemsArray[2] === itemsArray[8] &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[2] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[2]}`);
    } else if (
      itemsArray[0] === itemsArray[4] &&
      itemsArray[0] === itemsArray[8] &&
      itemsArray[0] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[0]}`);
    } else if (
      itemsArray[2] === itemsArray[4] &&
      itemsArray[2] === itemsArray[6] &&
      itemsArray[2] !== "empty"
    ) {
      setWinner(`Winner is ${itemsArray[2]}`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winner) {
      return toast(winner);
    }
    if (itemsArray[itemNumber] === "empty") {
      itemsArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("kya re baba dikh nhi rha ye phle se bhara hua h ");
    }
    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(true);
    setWinner("");
    itemsArray.fill("empty", 0, 9);
  };
  return (
    <div className="p-4">
      <ToastContainer />
      <div className="mx-auto  w-[350px] text-center mt-16 font-bold text-blue-600 text-2xl">
        {winner ? (
          <div>
            <p>{winner}</p>
            <button className="mt-5" onClick={reloadGame}>
              Reload GAME
            </button>
          </div>
        ) : (
          <p className="mx-auto">It's {isCross ? "cross" : "circle"} Chance</p>
        )}
      </div>
      <div className="grid grid-cols-3 w-[350px] sm:w-96 sm:h-96 h-[350px] gap-4 p-4 border-black rounded-md border-2 mx-auto sm:mt-[5%] mt-[27%]">
        {itemsArray.map((item, index) => (
          <div
            onClick={() => changeItem(index)}
            className="border border-black rounded-md "
          >
            <div className="max-w-min mx-auto max-h-min mt-[30%]">
              <Icons value={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
