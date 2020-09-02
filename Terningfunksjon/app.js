var amount2 = 0;
var amount3 = 0;
var amount4 = 0;
var amount5 = 0;
var amount6 = 0;
var amount7 = 0;
var amount8 = 0;
var amount9 = 0;
var amount10 = 0;
var amount11 = 0;
var amount12 = 0;

function getSum(){
    let throw1 = Math.floor(Math.random() * 6) + 1;
    let throw2 = Math.floor(Math.random() * 6) + 1;
    let sum = throw1 + throw2;
    return sum
}
function run(times){
    var arr = [];
    for(let i = 0; i<times; i++){
        let a = getSum();
        arr.push(a);
    }
    return arr;
}

function calculateAmounts(){
    for(let i = 0; i<arr.length; i++){
        switch(arr[i]){
            case 2:
                amount2++;;
                break;
            case 3:
                amount3++;
                break;
            case 4:
                amount4++;
                break;
            case 5:
                amount5++;
                break;
            case 6:
                amount6++;
                break;
            case 7:
                amount7++;
                break;
            case 8:
                amount8++;
                break;
            case 9:
                amount9++;
                break;
            case 10:
                amount10++;
                break;
            case 11:
                amount11++;
                break;
            case 12:
                amount12++;
                break;
        }
    }
}

function calculatePercent(totalAmount){
    var star2 = "";
    var star3 = "";
    var star4 = "";
    var star5 = "";
    var star6 = "";
    var star7 = "";
    var star8 = "";
    var star9 = "";
    var star10 = "";
    var star11 = "";
    var star12 = "";

    var percent2 = amount2/totalAmount * 100;
    var percent3 = amount3/totalAmount * 100;
    var percent4 = amount4/totalAmount * 100;
    var percent5 = amount5/totalAmount * 100;
    var percent6 = amount6/totalAmount * 100;
    var percent7 = amount7/totalAmount * 100;
    var percent8 = amount8/totalAmount * 100;
    var percent9 = amount9/totalAmount * 100;
    var percent10 = amount10/totalAmount * 100;
    var percent11 = amount11/totalAmount * 100;
    var percent12 = amount12/totalAmount  * 100;
    for(let i = 0; i<Math.floor(percent2); i++){
        star2+="*"
    }
    for(let i = 0; i<Math.floor(percent3); i++){
        star3+="*"
    }
    for(let i = 0; i<Math.floor(percent4); i++){
        star4+="*"
    }
    for(let i = 0; i<Math.floor(percent5); i++){
        star5+="*"
    }
    for(let i = 0; i<Math.floor(percent6); i++){
        star6+="*"
    }
    for(let i = 0; i<Math.floor(percent7); i++){
        star7+="*"
    }
    for(let i = 0; i<Math.floor(percent8); i++){
        star8+="*"
    }
    for(let i = 0; i<Math.floor(percent9); i++){
        star9+="*"
    }
    for(let i = 0; i<Math.floor(percent10); i++){
        star10+="*"
    }
    for(let i = 0; i<Math.floor(percent11); i++){
        star11+="*"
    }
    for(let i = 0; i<Math.floor(percent12); i++){
        star12+="*"
    }

    console.log("2:  " +star2);
    console.log("3:  " +star3);
    console.log("4:  " +star4);
    console.log("5:  " +star5);
    console.log("6:  " +star6);
    console.log("7:  " +star7);
    console.log("8:  " +star8);
    console.log("9:  " +star9);
    console.log("10: " +star10);
    console.log("11: " +star11);
    console.log("12: " +star12);
}
var runs = 1000000;
var arr = run(runs);
calculateAmounts();
calculatePercent(runs);