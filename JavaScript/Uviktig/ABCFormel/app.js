function calculate(){
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;

    var kvdRot = kvadratRot(a, b, c);

    console.log(a + "x² + " + b + "x + " + c);
    if(kvdRot < 0){
        console.log("L=Ø");
    }
    if(kvdRot>0){
        var x1 = (-1*b + Math.sqrt(kvdRot))/(2*a)
        var x2 = (-1*b - Math.sqrt(kvdRot))/(2*a) 
        console.log("x = " + x1.toFixed(2) + " ∪ " + "x = " + x2.toFixed(2));
    }else if(kvdRot == 0){
        var x = (-1*b)/(2*a)
        console.log("x = " + x.toFixed(2));
    }
}

function kvadratRot(a, b, c){
    return Math.pow(b, 2) - 4*a*c
}
