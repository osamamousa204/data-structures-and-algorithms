const linkList = require('../Data-Structures/linkedList/linked-List.js');

describe('linkList Module', () => {

  const numbers = new linkList.LinkedList();
  const init = 5;
  const second = 10;
  const third = 3;

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
    expect(numbers.insert(second)).toEqual({ head:  { value: 10, next: { value: 5, next: null } } });
    expect(numbers.head.value).toEqual(second);
    expect(numbers.head.next.value).toEqual(init);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(numbers.includes(second)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(numbers.includes(25)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(numbers.toString()).toEqual(`{ ${second} } -> { ${init} } -> null`);
  });

  it('Can successfully add a node to the end of the linked list', () => {
    expect(numbers.append(third)).toEqual({ head:  { value: 10, next: { value: 5, next: { value: 3, next: null } } } });
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    expect(numbers.append(9)).toEqual({ head:  { value: 10, next: { value: 5, next: { value: 3, next: { value: 9, next: null } } } } });
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    expect(numbers.insertBefore(3,15)).toEqual({ head:  { value: 10, next: { value: 5, next: { value: 15, next: { value: 3, next: { value: 9, next: null } } } } } });
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    expect(numbers.insertBefore(10,1)).toEqual({ head: { value: 1, next: { value: 10, next: { value: 5, next: { value: 15, next: { value: 3, next: { value: 9, next: null } } } } } }  });
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    expect(numbers.insertAfter(15,27)).toEqual({ head: { value: 1, next: { value: 10, next: { value: 5, next: { value: 15, next: { value: 27, next: { value: 3, next: { value: 9, next: null } } } } } } }  });
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    expect(numbers.insertAfter(9,30)).toEqual({ head: { value: 1, next: { value: 10, next: { value: 5, next: { value: 15, next: { value: 27, next: { value: 3, next: { value: 9, next: { value: 30, next: null } } } } } } } }  });
  });

  it('Where k is greater than the length of the linked list', () => {
    expect(numbers.kthFromEnd(20)).toEqual('this value begger than the length of the ll');
  });

  it('Where k and the length of the list are the same', () => {
    expect(numbers.kthFromEnd(8)).toEqual(1);
  });

  it('Where k is not a positive integer', () => {
    expect(numbers.kthFromEnd(-8)).toEqual('only positive numbers are acceptable');
  });

  it('Where the linked list is of a size 1', () => {
    const newNumbers = new linkList.LinkedList();
    newNumbers.append(9);
    expect(newNumbers.kthFromEnd(1)).toEqual(9);
  });

  it('where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(numbers.kthFromEnd(5)).toEqual(15);
  });

});
