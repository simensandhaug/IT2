function isPrime(num, arr){
    for(let i = 0; i<arr.length; i++){
        if(num % arr[i] == 0) return false;
    }
    return true;
}


function checkPrimes(n){
    var arr = [2];
    for(let i = 3; i < n; i+=2){
        if(isPrime(i, arr)) arr.push(i);
    }
    console.log(arr);
}


checkPrimes(20);

