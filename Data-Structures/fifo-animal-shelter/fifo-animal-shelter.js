// class Animal {
//   constructor(name , type){
//     this.type = type;
//     this.name = name;
//   }
// }
  
class AnimalShelter {
  constructor(){
    this.storage = [];
  }
  //   enqueue(name,type){
  //     if(name && type){
  //       let animal = new Animal(name,type);
  //       if(animal.type === 'cat' || animal.type === 'dog'){
  //         this.storage.push(animal);
  //       }else{
  //         return 'this shelter only for dogs and cats';
  //       }
  //     }else{
  //       return 'please add a name for the animal and a type';
  //     }
  
  //   }
  enqueue(animal){
    if(animal){
      if(animal.type === 'cat' || animal.type === 'dog'){
        this.storage.push(animal);
      }else{
        return 'this shelter only for dogs and cats';
      }
    }else{
      return 'please add an animal';
    }
  
  }
  dequeue(pref){
    if(pref){
      while(this.storage.length != 0){
        
        if(this.peek().type === pref.type &&  this.peek().name === pref.name){
          return this.peek();
        }else{
          this.storage.shift();
        }
      }
      return null;
    }else{
      return 'please enter your preffered animal';
    }
  }
  peek(){
    return this.storage[0];
  }
}
  
let shelter = new AnimalShelter();
shelter.enqueue({type : 'cat' , name : 'cat12'});
shelter.enqueue({type : 'dog' , name : 'dog78'});
shelter.enqueue({type : 'cat' , name : 'cat22'});
shelter.enqueue({type : 'dog' , name : 'dog10'});
shelter.dequeue({type : 'dog' , name : 'dog78'});
