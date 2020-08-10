class Node {
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
  // root => left => right
  preOrder(){
    const result = [];
    const _traversal = (node)=>{
      result.push(node.value);
      if(node.left) _traversal (node.left);
      if(node.right) _traversal (node.right);    
    };
    _traversal(this.root);
    return result;
  }
  // left => root => right
    
  inOrder(){
    const result = [];
    const _traversal = (node)=>{
      if(node.left) _traversal (node.left);
      result.push(node.value);
      if(node.right) _traversal (node.right);    
    };
    _traversal(this.root);
    return result;
  }
  // left => right =>root 
    
  postOrder(){
    const result = [];
    const _traversal = (node)=>{
      if(node.left) _traversal (node.left);
      if(node.right) _traversal (node.right);    
      result.push(node.value);
    };
    _traversal(this.root);
    return result;
  }
  
  add(value){
    if(value){
      const node = new Node(value);
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
    
}
  
let myTree = new BinaryTree();
myTree.add(8);
myTree.add(6);
myTree.add(4);
myTree.add(2);
myTree.add(12);
myTree.add(15);
myTree.add(74);
myTree.add(1);
myTree.add(5);
myTree.add(21);
  

function FizzBuzzTree (tree) {
  if(tree){
    if(tree.root){
      const result = tree;
      const _traversal = (node)=>{
        if(!(node.value % 5) && !(node.value % 3)){
          node.value = 'FizzBuzz';
        }else if (!(node.value % 5)){
          node.value = 'Buzz';
        }else if(!(node.value % 3)){
          node.value = 'Fizz';
        }else{
          node.value = `${node.value}`;
        }
        if(node.left) _traversal (node.left);
        if(node.right) _traversal (node.right);    
      };
      _traversal(result.root);
      return result;
    }else{
      return 'the tree is empty';
    }
  }else{
    return 'please pass a tree';
  }
}