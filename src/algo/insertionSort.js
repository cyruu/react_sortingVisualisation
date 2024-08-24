export const insertionSort = async (arr, setArr, speed, isSorting) => {
  if (isSorting.current) {
    isSorting.current = false;
  } else {
    isSorting.current = true;
  }
  console.log("before sortin", arr);
  let defaultColor = "#fff5e4";
  let sortingColor1 = "#B4E380";
  let sortingColor2 = "#FF8225";
  let sortedColor = "#afbcff";
  const firstBar = document.querySelectorAll(".bar")[0];
  firstBar.style.backgroundColor = sortedColor;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      if (!isSorting.current) return;
      const selected = document.querySelectorAll(".bar")[j + 1];
      selected.style.backgroundColor = sortingColor2;
      arr[j + 1] = arr[j];
      j--;
      setArr([...arr]);
      await new Promise((res, rej) => {
        setTimeout(() => {
          res("sf");
        }, speed);
      });
      selected.style.backgroundColor = sortedColor;
    }
    const unselectedBars = document.querySelectorAll(".bar")[i];
    unselectedBars.style.backgroundColor = sortedColor;
    arr[j + 1] = temp;
  }
  isSorting.current = false;
};
