function repeatedWord (str){
  if(str){
    let sum = '';
    let idx = 0;
    let arr = [];
    for (let i = 0 ; i <= str.length ; i++){
      if ( str.charCodeAt(i) > 64){
        sum += str[i];
      }else if(sum != ''){
        arr[idx] = sum;
        idx++;
        sum = '';
      }
    }
    for(let i = 0; i < arr.length ; i++){
      for(let j = 0 ; j < arr.length ; j++){
        if(i != j && arr[i] == arr[j]){
          return arr[i];
        }
      }
    }
    return 'no repeated strings';
  }else{
    return 'to test if the string id repeated you should pass  a string';
  }
}
  
repeatedWord('hello world, helloooo!: word rtrss  world');