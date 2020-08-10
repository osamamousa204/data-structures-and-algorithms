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


function tree_intersection(tree1,tree2){
  let arr = [];
  let idx = 0;
  if(tree1.root && tree2.root){
    const traversal = (node1 , node2) =>{
      if (node1.value === node2.value) {
        arr[idx] = node1.value;
        idx++;
      }
      if(node1.left && node2.left) traversal (node1.left , node2.left);
      if(node1.right && node2.right) traversal (node1.right , node2.right);
    };
    traversal(tree1.root , tree2.root);
    return arr;
  }else{
    return 'the tree is';
  }
}
  