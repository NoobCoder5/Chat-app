async function HeapSort(array, keyword, data, delay, container, nav) {
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

  async function sort(arr) {
    var n = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
      let first = container.querySelector(`[id=a${i}]`);
      let second = container.querySelector(`[id=a${0}]`);
      first.classList.toggle("blue");
      second.classList.toggle("blue");
      first.classList.toggle("green");
      second.classList.toggle("green");
      // Move current root to end
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      await sleep(first,second);

      // call max heapify on the reduced heap
      await heapify(arr, i, 0);
    }
  }

  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  async function heapify(arr, n, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) largest = r;

    // If largest is not root
    if (largest != i) {
      let first = container.querySelector(`[id=a${i}]`);
      let second = container.querySelector(`[id=a${largest}]`);
      first.classList.toggle("blue");
      second.classList.toggle("blue");
      first.classList.toggle("green");
      second.classList.toggle("green");
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      await sleep(first, second);
      // Recursively heapify the affected sub-tree
      await heapify(arr, n, largest);
    }
  }
  var arr = [...array];
  var n = arr.length;

 await sort(arr);

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

export default HeapSort;
