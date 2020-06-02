const linkList = require('../Data-Structures/linkedList/linked-List.js');
const llMerge = require('../Data-Structures/llMerge/ll-merge.js');


describe('llMerge Module test', () => {
  const numbers = new linkList.LinkedList();
  const strings = new linkList.LinkedList();
  numbers.append(4);
  numbers.append(12);
  strings.append('o');
  strings.append('y');
  it('“Happy Path” - it will merge tow LinkedLists', () => {
    expect(llMerge(numbers,strings)).toEqual({ head:  { value: 4, next: { value: 12, next: { value: 'o', next: { value: 'y', next: null } } } } });
  });
  it('expectable faliar', () => {
    expect(llMerge(numbers)).toEqual('you should input tow linkedlist');
  });
});