class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor(){
    this.head = null;
  }
  preAppend(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  }
  search(key){
    if(this.head.value[key]){
      return this.head.value;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      if(current.value[key]){
        return current.value[key];
      }
    }
    return null;
  }
  contains(key){
    if(this.head.value[key]){
      return true;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      if(current.value[key]){
        return true;
      }
    }
    return false;
  }
      
}
class hashTable {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }
  hash(key){
    let charCodeSum = key.split('').reduce((acc,current)=>{
      return acc + current.charCodeAt(0);
    },0);
    let hashKey  = (charCodeSum * 13 ) % this.size;
    return hashKey;
  }
  add(key,value){
    if(key && value){
      let hash = this.hash(key);
      if(!this.storage[hash]){
        let ll = new linkedList();
        ll.preAppend({[key] : value});
        this.storage[hash] = ll;
      }else{
        this.storage[hash].preAppend({[key] : value});
      }
    }else{
      return ('for adding to the hash-table provide a key and a value ');
    }
  }
  get(key){
    if(key){
      let hash = this.hash(key);
      if(!this.storage[hash]){
        return null;
      }else{
        return this.storage[hash].search(key)[key];
      }
    }else{
      return 'to get a vlaue provide a key';
    }
  }
  contains(key){
    if(key){
      let hash = this.hash(key);
      if(!this.storage[hash]){
        return false;
      }else{
        return this.storage[hash].contains(key);
      }
    }else{
      return 'to check if  a vlaue exists in the hashTable provide a key';
    }
  }
}
    
  
let map1 = new hashTable(300);
map1.add('name' , 'Osama');
map1.add('age' , '24');
map1.add('wight' , '65');

let map2 = new hashTable(300);
map2.add('name' , 'Mahmoud');
map2.add('age' , '18');
map2.add('wight' , '67');
  
  
function liftJoin (map1 , map2){
  let arr1 = [];
  let arr2 = [];
  for(let i = 0; i < map1.storage.length ; i++){
    if(map1.storage[i]){
      let key = Object.keys(map1.storage[i].head.value)[0];
      arr1.push(key);
      arr1.push(map1.storage[i].head.value[key]);
      arr1.push(map2.get(key));
      arr2.push(arr1);
      arr1 = [];
    }
  }
  return arr2;
}
  
liftJoin(map1 , map2);
  
  
  