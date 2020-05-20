function BinarySearch(arr, num) {
  let findIndexNumber;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      findIndexNumber = i;
    }
  }
  return findIndexNumber || -1;
}


module.exports = BinarySearch;


