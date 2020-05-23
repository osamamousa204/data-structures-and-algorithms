const linkList = require('../Data-Structures/linkedList/linked-List.js');

describe('linkList Module', () => {
  const numbers = new linkList.LinkedList();
  const init = 5;
  const second = 10;
  it('it should create (an empty new instans) from the linklist', () => {
    expect(numbers).toEqual({ head: null });
  });
  it('Can properly insert into the linked list', () => {

    expect(numbers.insert(init)).toEqual({ head:  { value: 5, next: null } });
  });
  it('The head property will properly point to the first node in the linked list', () => {
    expect(numbers.head.value).toEqual(init);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(numbers.insert(second)).toEqual({ head:  { value: 5, next: { value: 10, next: null } } });
    expect(numbers.head.value).toEqual(init);
    expect(numbers.head.next.value).toEqual(second);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(numbers.includes(second)).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(numbers.includes(25)).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(numbers.toString()).toEqual(`{ ${init} } -> { ${second} } -> null`);
  });
});