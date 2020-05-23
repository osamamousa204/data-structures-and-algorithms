const linkList={};
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
  
class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    if(value){
      let node = new Node(value);
      if(!this.head){
        this.head = node;
        return this;
      }
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      return this;
    }
  }
  includes(checkValue){
    let bool = false;
    let current = this.head;
    if(current.value === checkValue){
      bool = true;
      return bool;
    }else{
      while(current.next){
        current = current.next;
        if(current.value === checkValue){
          bool = true;
          break;
        }
      }
      return bool;
    }
  }
  toString(){
    let current = this.head;
    let allValuesInLinkList = `{ ${current.value} }`;
    while(current.next){
      current = current.next;
      allValuesInLinkList += ` -> { ${current.value} }`;
    }
    return allValuesInLinkList + ' -> null';
  }
}
linkList.Node = Node;
linkList.LinkedList = LinkedList;
module.exports = linkList;