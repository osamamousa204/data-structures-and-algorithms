
function multiBracketValidation(input){
  if(input){
    let bool = true;
    let slicedInput = input.split('');
    let filteredInput = slicedInput.filter(val=>{
      return( val === '[' || val === ']' || val === ')' || val === '(' || val === '{' || val === '}');
    });
    let str = filteredInput.join('');
    while(str.length > 1){
      if(str[0] === '['){
        let idx;
        if(str.length === 4 && str[str.length-1] === ']'){
          idx = str.length - 1 ;
        }else{
          idx = str.indexOf(']');
        }
        if(idx % 2 && idx != -1 ){
          bool = true;
          str = str.slice(idx+1);
        }else{
          return false;
        }
      }else if(str[0] === '('){
        let idx;
        if(str.length === 4 && str[str.length-1] === ')'){
          idx = str.length - 1 ;
        }else{
          idx = str.indexOf(')');
        }
        if(idx % 2 && idx != -1){
          bool = true;
          str = str.slice(idx+1);
        }else{
          return false;
        }
      }else if(str[0] === '{'){
        let idx;
        if(str.length === 4 && str[str.length-1] === '}'){
          idx = str.length - 1 ;
        }else{
          idx = str.indexOf('}');
        }
        if(idx % 2 && idx != -1 ){
          bool = true;
          str = str.slice(idx+1);
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
    return bool;
  
  }
  else{
    return 'please input a string';
  }
}
  