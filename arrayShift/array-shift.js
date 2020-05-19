function insertShiftArray(arr,num){
    let checkNumOddEven;
    let arrResult = [];
    if (arr.length % 2 ){
  
      checkNumOddEven = Math.ceil(arr.length / 2)
    }else{
      checkNumOddEven = arr.length / 2;
    }
  
    for(let i = 0 ; i <= arr.length ; i++){
      if( i == checkNumOddEven){
      arrResult[checkNumOddEven] = num
      }else if( i >checkNumOddEven ){
        arrResult[i] = arr[i-1]
      }else{
        arrResult[i] = arr[i]
      }
    }
  return arrResult
  }