async function MergeSort(array, keyword, data, delay, container, nav) {
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
  function sleep(first, second) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        const newarr = [...arr];
        keyword(data(newarr));
        first.classList.toggle("green");
        second.classList.toggle("green");
        first.classList.toggle("blue");
        second.classList.toggle("blue");
      }, delay * 20)
    );
  }

  const arr = [...array];
  const arr_size = arr.length;

  async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      let one = 0;
      let two = 0;
      for (let x = 0; x < arr.length; x++) {
        if (arr[x] == L[i]) {
          one = x;
        }
      }
      for (let z = 0; z < arr.length; z++) {
        if (arr[z] == R[j]) {
          two = z;
        }
      }
      let first = container.querySelector(`[id=a${one}]`);
      let second = container.querySelector(`[id=a${two}]`);

      first.classList.toggle("blue");
      second.classList.toggle("blue");
      first.classList.toggle("green");
      second.classList.toggle("green");

      if (L[i] <= R[j]) {
        arr[k] = L[i];

        i++;
      } else {
        arr[k] = R[j];

        j++;
      }
      await sleep(first, second);
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      //   console.log("1");
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j];

      j++;
      k++;
    }
    const newarr = [...arr];
    keyword(data(newarr));
  }

  // l is for left x and r is
  // right index of the sub-array
  // of arr to be sorted */
  async function mergeSort(arr, l, r) {
    if (l >= r) {
      //   console.log("Gone");
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    // console.log("enter");
    await mergeSort(arr, l, m);

    await mergeSort(arr, m + 1, r);

    // console.log(arr, l, m, r);
    await merge(arr, l, m, r);
  }

  // UTILITY FUNCTIONS
  // Function to print an array

 await mergeSort(arr, 0, arr_size - 1);

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

export default MergeSort;
