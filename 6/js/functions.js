function stringLength(string,length){
  if(string.length<=length){
    return true;
  }
  return false;
}

function polindrome(string){
  const workString = string.replaceAll(' ', '').toUpperCase();
  for (let i=0;i<workString.length/2-1;i++){
    if (workString[i]!==workString[workString.length-1-i]){
      return false;
    }
  }
  return true;
}

function numbers(string){
  const workString=string.toString();
  let finalString="";
  for (let i=0;i<workString.length;i++){
    if(!Number.isNaN(parseInt(workString[i],10))){
      finalString+=workString[i];
    }
  }
  return parseInt(finalString,10);
}
