import React, { useState } from "react";

const Test = () => {
  let arr = [10, 4, 2, 67, 4, 54, 78];
  mergeSort(arr, 0, arr.length - 1);
  function mergeSort(arr, left, right) {
    // let builtSort = arr.sort((a, b) => a - b);
    // console.log(builtSort);

    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);
      merge(arr, left, mid + 1, right);
    }
  }
  function merge(arr, l, m, r) {
    let brr = [];
    let x = l;
    let y = m;
    let k = l;

    while (x < m && y <= r) {
      if (arr[x] < arr[y]) {
        brr[k] = arr[x];
        k++;
        x++;
      } else {
        brr[k] = arr[y];
        k++;
        y++;
      }
    }
    while (x < m) {
      brr[k] = arr[x];
      k++;
      x++;
    }
    while (y <= r) {
      brr[k] = arr[y];
      k++;
      y++;
    }
    console.log(brr);
  }
  useState(() => {
    mergeSort();
  }, []);
  return <div>Test</div>;
};

export default Test;
