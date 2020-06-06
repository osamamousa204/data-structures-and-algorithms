const stacksAndQueues = {};

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
    

class Stack{
  constructor(){
    this.storage = [];
    this.top = null;
  }
  push(value){
    const node = new Node(value);
    this.storage.unshift(node);
    this.top = node;
  }
  pop(){
    if(this.storage.length != 0){
      const item = this.storage.shift();
      this.top = this.storage[0] ? this.storage[0] : null;
      return item.value;
    }else{
      return 'the stack is empty';
    }
  }
  peak(){
    if(this.storage.length != 0){
      return this.top.value;
    }else{
      return 'the stack is empty';
    }
  }
  isEmpty(){
    return this.storage.length == 0;
  }
}

////////////////////////////////////////////

class Queue {
  constructor(){
    this.storage = [];
    this.front = null;
  }
  
  enqueue(value){
    const node = new Node(value);
    this.storage.push(node);
    this.front = this.storage[0];
  }
  
  dequeue(){
    if(this.storage.length != 0){
      const item = this.storage.shift();
      this.front = this.storage[0] ? this.storage[0] : null;
      return item.value;
    }else{
      return 'the Queue is empty';
    }
  }
  peak(){
    if(this.storage.length != 0){
      return this.storage[0].value;
    }else{
      return 'the Queue is empty';
    }
  }
  isEmpty(){
    return this.storage.length == 0;
  }
}


stacksAndQueues.Stack = Stack;
stacksAndQueues.Queue = Queue;
module.exports = stacksAndQueues;