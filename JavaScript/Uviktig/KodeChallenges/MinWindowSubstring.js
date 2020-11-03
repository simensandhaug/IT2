function MinWindowSubstring(strArr) { 
  let n = strArr[0];
  let k = strArr[1].split('');
  for(let i = k.length; i <= n.length; i++ ){
    for(j = 0; j <= n.length - i; j++){
      let window = n.substr(j, i);
      if(isContained(window)){
        return window;
      }
    }
  }
  return false;

  function isContained(n) {
    let arr = n.split('');
    for(let i = 0; i < k.length; i++){
      let place = arr.findIndex(val => {return val === k[i]});
      if(place === -1){
        return false;
      }else{
        arr.splice(place, 1);
      }
    }
    return true;
  }   
}
   
// keep this function call here 
console.log(MinWindowSubstring(readline()));