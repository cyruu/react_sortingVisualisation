import React, { useEffect, useRef, useState } from "react";
import { bubbleSort } from "../algo/bubbleSort";
import "./sorting.css";
import { insertionSort } from "../algo/insertionSort";
const SortingVisualiser = () => {
  const [arr, setArr] = useState([]);
  const [freq, setFreq] = useState(50);
  const [speed, setSpeed] = useState(10);
  const [barWidth, setBarWidth] = useState(8);
  const isSorting = useRef(false);

  const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    let tempArr = [];
    for (let i = 0; i < freq; i++) {
      tempArr.push(randomValue(5, 500));
    }
    setArr(tempArr);
    for (let i = 0; i < freq; i++) {
      const bar = document.querySelectorAll(".bar")[i];
      if (bar) {
        bar.style.backgroundColor = "#fff5e4";
      }
    }
  };
  useEffect(() => {
    isSorting.current = false;
  }, [freq, speed]);
  useEffect(() => {
    resetArray();
  }, [freq]);
  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={resetArray}>New Array</button>
        <button
          onClick={() => {
            bubbleSort(arr, setArr, speed, isSorting);
          }}
        >
          Bubble Sort
        </button>
        <button
          onClick={() => {
            insertionSort(arr, setArr, speed, isSorting);
          }}
        >
          Insertion Sort
        </button>
      </div>
      <div className="options">
        <div className="freq" style={{ marginRight: "1rem" }}>
          <label htmlFor="frequency">Frequency</label>
          <input
            type="range"
            id="frequency"
            min="50"
            max="100"
            value={freq}
            onChange={({ target }) => {
              setFreq(target.value);
              // with decrease as freq increase
              setBarWidth(8 * (45 / freq));
            }}
          />
        </div>
        <div className="speed">
          <label htmlFor="speed" id="speed-label">
            Speed
          </label>
          <input
            type="range"
            id="speed"
            min="10"
            max="400"
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
              style={{ height: `${el}px`, width: `${barWidth}px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualiser;
