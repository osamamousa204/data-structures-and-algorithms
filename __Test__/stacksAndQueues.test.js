const stacksAndQueues = require('../Data-Structures/stacksAndQueues/stacks-and-queues.js');

describe('stacksAndQueues Module tests', () => {

  describe('Stacks Module test', () => {
    it('Can successfully push onto a stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      expect(stack.peak()).toEqual(7);
    });
    it('Can successfully push multiple values onto a stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      stack.push(25);
      stack.push(74);
      expect(stack.peak()).toEqual(74);
    });
    it('Can successfully pop off the stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      expect(stack.pop()).toEqual(4);
    });
    it('Can successfully empty a stack after multiple pops', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBeTruthy();
    });
    it('Can successfully peek the next item on the stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      stack.push(25);
      expect(stack.peak()).toEqual(25);
    });
    it('Can successfully instantiate an empty stack', () => {
      const stack = new stacksAndQueues.Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
    it('Calling pop or peek on empty stack raises exception', () => {
      const stack = new stacksAndQueues.Stack();
      expect(stack.pop()).toEqual('the stack is empty');
      expect(stack.peak()).toEqual('the stack is empty');
    });
  });

  describe('Queue Module test', () => {
    it('Can successfully enqueue into a queue', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      expect(queue.peak()).toEqual(7);
    });
    it('Can successfully enqueue multiple values into a queue', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      expect(queue.peak()).toEqual(7);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      expect(queue.dequeue()).toEqual(7);
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      expect(queue.peak()).toEqual(7);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toBeTruthy();
    });
    it('Can successfully instantiate an empty queue', () => {
      const queue = new stacksAndQueues.Queue();
      expect(queue.isEmpty()).toBeTruthy();
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
      const queue = new stacksAndQueues.Queue();
      expect(queue.dequeue()).toEqual('the Queue is empty');
      expect(queue.peak()).toEqual('the Queue is empty');
    });
  });
});