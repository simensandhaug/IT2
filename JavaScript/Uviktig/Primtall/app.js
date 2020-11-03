function isPrime(num){
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            
            return false;
        }
    }
    return true;
}

function checkPrimes(n){
    var arr = [2];
    for(let i = 3; i < n; i+=2){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    console.log(arr);
    console.log("Det er " + arr.length + " primtall mellom: 0 og " + n);
    console.log("Det 100 primtallet er: " + arr[99]);
}

checkPrimes(1000);