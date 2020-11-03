var j = 4;
for (let i = 3; i<j; i++){
    if(i%3==2 && i%5==2 && i%7==2){
        j--;
        console.log(i);
    }
    else{
        j++;
    }
}

