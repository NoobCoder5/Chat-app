async function QuickSort(items, keyword, data, delay, container, nav) {
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

  async function quickSort(items, left, right) {
    async function swap(items, leftIndex, rightIndex) {
      let first = container.querySelector(`[id=a${leftIndex}]`);
      let second = container.querySelector(`[id=a${rightIndex}]`);
      first.classList.toggle("blue");
      second.classList.toggle("blue");
      first.classList.toggle("green");
      second.classList.toggle("green");
      var temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
          var newarr = [...items];
          keyword(data(newarr));
          first.classList.toggle("green");
          second.classList.toggle("green");
          first.classList.toggle("blue");
          second.classList.toggle("blue");
        }, delay * 10)
      );
    }

    async function partition(items, left, right) {
      var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (items[i] < pivot) {
          i++;
        }
        while (items[j] > pivot) {
          j--;
        }
        if (i <= j) {
          await swap(items, i, j); //sawpping two elements

          i++;
          j--;
        }
      }
      return i;
    }

    var index;
    if (items.length > 1) {
      index = await partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        await quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        await quickSort(items, index, right);
      }
    }

    return items;
  }
  // first call to quick sort
  await quickSort(items, 0, items.length - 1);

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

export default QuickSort;
