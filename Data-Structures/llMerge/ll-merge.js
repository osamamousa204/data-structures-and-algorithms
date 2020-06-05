const LinkedList = require('../linkedList/linked-List.js');

function mergeLists (ll1,ll2){
  if(ll1 && ll2){
    let mergedNode = new LinkedList();
    if(ll1.head.value){
      mergedNode.append(ll1.head.value);
    }
    if(ll2.head.value){
      mergedNode.append(ll2.head.value);
    }
    let current1 = ll1.head;
    let current2 = ll2.head;
    while(current1.next || current2.next){
      if(current1.next){
        current1 = current1.next;
        mergedNode.append(current1.value);
      }
      if(current2.next){
        current2 = current2.next;
        mergedNode.append(current2.value);
      }
    }
    return mergedNode.toString();
  }else{
    return 'you should input tow linkedlist';
  }
}
module.exports = mergeLists;