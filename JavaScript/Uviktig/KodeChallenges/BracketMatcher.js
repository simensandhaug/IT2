function BracketMatcher(str) {
    var arr = str.split(""); 
    var leftBracket = 0;
    var rightBracket = 0;
    for(var i = 0; i<arr.length; i++){
      if(arr[i] == "("){
      leftBracket++;
    } 
      else if(arr[i] == ")"){
      rightBracket++;
    }
  }
    if(rightBracket == leftBracket){
      return 1;
    }else{
      return 0;
    }
  
  }
     
  // keep this function call here 
  console.log(BracketMatcher(readline()));