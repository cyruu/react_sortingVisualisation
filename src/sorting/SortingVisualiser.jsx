import React, { useEffect, useState } from "react";
import { bubbleSort } from "../algo/bubbleSort";
import "./sorting.css";
const SortingVisualiser = () => {
  const [arr, setArr] = useState([]);
  const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    let tempArr = [];
    for (let i = 0; i < 100; i++) {
      tempArr.push(randomValue(5, 500));
    }
    setArr(tempArr);
  };
  useEffect(() => {
    resetArray();
  }, []);
  return (
    <div className="container">
      <div className="bars">
        {arr.map((el, i) => {
          return (
            <div key={i} className="bar" style={{ height: `${el}px` }}></div>
          );
        })}
      </div>
      <button onClick={resetArray}>New Array</button>
      <button onClick={() => bubbleSort(arr, setArr)}>Bubble Sort</button>
    </div>
  );
};

export default SortingVisualiser;
