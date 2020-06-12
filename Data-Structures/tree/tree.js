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
  contains(value){
    if(value){
      if(this.root.value === value ){
        return true;
      }
      let current = this.root;
      while(current != null){
        if(current.value < value){
          current = current.right;
          if(current && current.value === value){
            return true;
          }
        }else{
          current = current.left;
          if(current &&  current.value === value){
            return true;
          }
        }
      }
      return false;
    }else{
      return 'you should pass a value';
    }
  }
}