function merge(array1, array2) {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      sortedArray.push(array1[i]);
      i++;
    } else {
      sortedArray.push(array2[j]);
      j++;
    }
  }

  return [...sortedArray, ...array1.slice(i), ...array2.slice(j)];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);

  const leftSorted = mergeSort(leftArr);
  const rightSorted = mergeSort(rightArr);

  return merge(leftSorted, rightSorted);
}

const sortedArray1 = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
const sortedArray2 = mergeSort([105, 79, 100, 110]);

console.log("Sorted array 1: " + sortedArray1);
console.log("Sorted array 2: " + sortedArray2);
