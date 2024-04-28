"use client";

import React, { useState } from "react";

function UpdatingScreen() {
  const [count, setCount] = useState<number>(0);
  console.log("🚀 ~ UpdatingScreen ~ count:", count);

  function increment() {
    console.log("increment");
    // value = value + 1;
    setCount(count + 1);
    // console.log("🚀 ~ increment ~ value:", value);
  }

  const decrement = () => {
    console.log("decrement");
    // value = value - 1;
    setCount(count - 1);
    // console.log("🚀 ~ decrement ~ value:", value);
  };

  return (
    <div className="flex mt-5 justify-center flex-col gap-5 items-center">
      <p className="font-bold">Counter App</p>
      <div className="flex  gap-5 justify-center items-center">
        <button
          className="bg-blue-500 rounded-sm py-2 px-5"
          onClick={increment}
        >
          +
        </button>
        {count}
        <button className="bg-red-500 rounded-sm py-2 px-5" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default UpdatingScreen;
