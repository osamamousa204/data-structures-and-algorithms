class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    let node = new Node(value);
    if(!this.front){
      this.front = node;
    }else{
      this.rear.next = node;
    }
    this.rear =node;
  }
  peek(){
    return this.front;
  }
  dequeue(){
    if(this.front){
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    }
  }
}
  
class NodeTREE {
  constructor(value , left = null , right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
    
class BinaryTree {
  constructor(root){
    this.root = root;    
  }
  add(value) {
    if(value){
      const node = new NodeTREE(value);
      if(!this.root){
        this.root = node;
        return this.root;
      }
      let current = this.root;
      let parent  = null;
      while(current != null){
        parent = current;
        if(current.value < node.value){
          current = current.right;
        }else{
          current = current.left;
        }
      }
      if(parent.value < node.value){
        parent.right = node;
      }else{
        parent.left = node;
      }
      return this.root;
    }else{
      return 'you should pass a value to add it in the tree';
    }
  }
  
  breadth_first(){
    let breadth = new Queue();
    let output = [];
    breadth.enqueue(this.root);
    while(breadth.peek()){
      let front = breadth.dequeue();
      output.push(front.value);
      if(front.left){breadth.enqueue(front.left);}
      if(front.right){breadth.enqueue(front.right);}
    }
    return output;
  }
}
  
