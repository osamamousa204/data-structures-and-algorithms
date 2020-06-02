const LinkedList = require('../linkedList/linked-List.js');

function mergeLists (ll1,ll2){
  if(ll1 && ll2){
    let mergedNode = new LinkedList.LinkedList();
    mergedNode.head = ll1.head;
    let current = mergedNode.head;
    while(current.next){
      current = current.next;
    }
    current.next = ll2.head;
    return mergedNode;
  }else{
    return 'you should input tow linkedlist';
  }
}
module.exports = mergeLists;