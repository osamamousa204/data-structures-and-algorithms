const insertShiftArray = require('../arrayShift/array-shift');

describe('Input Module', () => {
  it('it should shift the array frome the middle with the input number if the length of the array is even', () => {
    let arr = [2,4,6,8];
    let num = 5;
    expect(insertShiftArray(arr,num)).toEqual([2,4,5,6,8]);
  });

  it('it should shift the array frome the middle with the input number if the length of the array is odd', () => {
    let arr = [4,8,15,23,42];
    let num = 16;
    expect(insertShiftArray(arr,num)).toEqual([4,8,15,16,23,42]);
  });
});