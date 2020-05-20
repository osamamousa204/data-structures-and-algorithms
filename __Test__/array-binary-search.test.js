const BinarySearch = require('../arrayBinarySearch/array-binary-search');

describe('Input Module', () => {
  it('it should search for the index of the input number', () => {
    let arr = [4,8,15,16,23,42];
    let num = 15;
    expect(BinarySearch(arr,num)).toEqual(2);
  });

  it('If the number does not exist return -1', () => {
    let arr = [4,8,15,16,23,42];
    let num = 6;
    expect(BinarySearch(arr,num)).toEqual(-1);
  });
});