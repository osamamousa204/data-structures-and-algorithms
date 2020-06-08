
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
  
}

class PseudoQueue {

  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    if(this.stack1.top == null ){
      this.stack1.push(value);
      return this.stack1;
    }
    if(this.stack1){
      while(this.stack1.top){
        let out = this.stack1.pop();
        this.stack2.push(out);
      }
      this.stack1.push(value);
      while(this.stack2.top){
        let out = this.stack2.pop();
        this.stack1.push(out);
      }
      return this.stack1;
    }
  }

  dequeue(){
    if(this.stack1.top == null ){
      return 'Empty Queue';
    }
    return this.stack1.pop();
  }

}