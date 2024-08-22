import React, { useEffect, useState } from "react";
import { bubbleSort } from "../algo/bubbleSort";
import "./sorting.css";
const SortingVisualiser = () => {
  const [arr, setArr] = useState([]);
  const [freq, setFreq] = useState(120);
  const [speed, setSpeed] = useState(1);

  const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    let tempArr = [];
    for (let i = 0; i < freq; i++) {
      tempArr.push(randomValue(5, 500));
    }
    setArr(tempArr);
  };
  useEffect(() => {
    resetArray();
  }, [freq]);
  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={resetArray}>New Array</button>
        <button onClick={() => bubbleSort(arr, setArr, speed)}>
          Bubble Sort
        </button>
      </div>
      <div className="options">
        <div className="freq" style={{ marginRight: "1rem" }}>
          <label htmlFor="frequency">Frequency</label>
          <input
            type="range"
            id="frequency"
            min="120"
            max="220"
            value={freq}
            onChange={({ target }) => setFreq(target.value)}
          />
        </div>
        <div className="speed">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            id="speed"
            min="1"
            max="15"
            value={speed}
            onChange={({ target }) => setSpeed(target.value)}
          />
        </div>
      </div>
      <div className="bars">
        {arr.map((el, i) => {
          return (
            <div
              key={i}
              className="bar"
              style={{ height: `${el}px`, width: `4px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualiser;
