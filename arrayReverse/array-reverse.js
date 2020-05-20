// eslint-disable-next-line no-unused-vars
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - 1 - i];
  }
  return reversedArray;
}