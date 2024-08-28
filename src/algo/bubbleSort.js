export const bubbleSort = async (arr, setArr, speed, isSorting) => {
  //prevent multiple sorting together
  if (isSorting.current) {
    isSorting.current = false;
  } else {
    isSorting.current = true;
  }
  let sortedArr = [...arr];
  let sortedColor = "#afbcff";
  let defaultColor = "#fff5e4";
  let sortingColor1 = "#B4E380";
  let sortingColor2 = "#FF8225";
  var j = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (j = 0; j < sortedArr.length - i - 1; j++) {
      if (!isSorting.current) return;
      const selected = document.querySelectorAll(".bar")[j];
      const comapring = document.querySelectorAll(".bar")[j + 1];
      selected.style.backgroundColor = sortingColor1;
      comapring.style.backgroundColor = sortingColor2;
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;

        setArr([...sortedArr]);
        await myPromise(speed);
      }
      selected.style.backgroundColor = defaultColor;
      comapring.style.backgroundColor = sortedColor;
    }
  }
  isSorting.current = false;
};

const myPromise = (speed) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("ok");
    }, speed);
  });
};
