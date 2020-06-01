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

  //=========(append)=========\\

  append(value){
    if(value){
      let node = new Node(value);
      if(!this.head){
        this.head = node;
        return this;
      }
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
      return this;
    }
  }

  //=========(insert)=========\\

  insert(value){
    if(value){
      let node = new Node(value);
      if(!this.head){
        this.head = node;
        return this;
      }
      let newNode = this.head;
      this.head = node;
      this.head.next = newNode;
      return this;
    }
  }

  //=========(insertBefore)=========\\

  insertBefore(value, newVal){
    if(value && newVal){
      let node = new Node(newVal);
      if(this.head.value === value){
        let  current = this.head;
        this.head = node;
        this.head.next = current;
        return this;
      }else{
        let  current = this.head;
        let prevCurrent = current;
        while(current.next){
          current = current.next;
          let lastCurrent = current;
          if(current.value === value){
            prevCurrent.next = node;
            prevCurrent.next.next = lastCurrent;
            return this;
          }
          prevCurrent = lastCurrent;
        }
        return 'Exception';
      }
    }else{
      return 'you should insert a value and a new value';
    }
  }

  //=========(insertAfter)=========\\
  insertAfter(value, newVal){
    if(value && newVal){
      let node = new Node(newVal);
      if(this.head.value === value){
        let item = this.head.next;
        let  current = this.head;
        current.next = node;
        current.next.next = item;
        return this;
      }else{
        let  current = this.head;
        while(current.next){
          current = current.next;
          if(current.value === value){
            let item =   current.next;
            current.next = node;
            current.next.next = item;
            return this;
          }
        }
      }
    }else{
      return 'you should insert a value and a new value';
    }
  }

  //=========(includes)=========\\

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

  //=========(toString)=========\\

  toString(){
    let current = this.head;
    let allValuesInLinkList = `{ ${current.value} }`;
    while(current.next){
      current = current.next;
      allValuesInLinkList += ` -> { ${current.value} }`;
    }
    return allValuesInLinkList + ' -> null';
  }

  //===========(kthFromEnd(k))========\\

  kthFromEnd(k){
    let allNodes = [];
    allNodes[0] = this.head;
    let current = this.head;
    let i = 1;
    while(current.next){
      current =  current.next;
      allNodes[i] = current;
      i++;
    }
    if(k > allNodes.length ){
      return 'this value begger than the length of the ll';
    }else if(k <= 0 ){
      return 'only positive numbers are acceptable';
    }else if(typeof (k) != 'number'){
      return 'only  numbers are acceptable';
    }else{
      return allNodes[allNodes.length  - k].value;
    }
  }
}


linkList.Node = Node;
linkList.LinkedList = LinkedList;
module.exports = linkList;