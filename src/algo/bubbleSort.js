export const bubbleSort = async (arr, setArr) => {
  let sortedArr = [...arr];
  let defaultColor = "red";
  var j = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (j = 0; j < sortedArr.length - i - 1; j++) {
      const selected = document.querySelectorAll(".bar")[j];
      const comapring = document.querySelectorAll(".bar")[j + 1];
      selected.style.backgroundColor = "blue";
      comapring.style.backgroundColor = "blue";
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;

        setArr([...sortedArr]);
        await myPromise();
      }
      selected.style.backgroundColor = defaultColor;
      comapring.style.backgroundColor = defaultColor;
    }
  }
};

const myPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("ok");
    }, 1);
  });
};
