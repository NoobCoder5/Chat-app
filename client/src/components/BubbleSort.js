async function BubbleSort(array, keyword, data, delay, container, nav) {
  nav.classList.toggle("pointer-events-none");
  const p = nav.querySelectorAll("p");
  const button = nav.querySelectorAll("button");
 
  for (let x = 0; x < 2; x++) {
    const ele = p[x];
    ele.classList.toggle("text-white");
    ele.classList.toggle("text-red-500");
  }
  for (let y = 0; y < 5; y++) {
    const ele = button[y];
    ele.classList.toggle("text-white");
    ele.classList.toggle("text-red-500");
  }

  const arr = [...array];
  const n = arr.length;
  var i, j;

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      let first = container.querySelector(`[id=a${j}]`);
      let second = container.querySelector(`[id=a${j + 1}]`);

      if (arr[j] > arr[j + 1]) {
        first.classList.toggle("blue");
        second.classList.toggle("blue");
        first.classList.toggle("green");
        second.classList.toggle("green");
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        const newarr = [...arr];
        keyword(data(newarr));
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
          first.classList.toggle("green");
          second.classList.toggle("green");
          first.classList.toggle("blue");
          second.classList.toggle("blue");
        }, delay * 10)
        );
      }
    }
  }
  nav.classList.toggle("pointer-events-none");
  for (let x = 0; x < 2; x++) {
    const ele = p[x];
    ele.classList.toggle("text-white");
    ele.classList.toggle("text-red-500");
  }
  for (let y = 0; y < 5; y++) {
    const ele = button[y];
    ele.classList.toggle("text-white");
    ele.classList.toggle("text-red-500");
  }
}

export default BubbleSort;
