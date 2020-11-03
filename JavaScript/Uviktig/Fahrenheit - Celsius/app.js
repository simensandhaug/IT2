
function calculate(){
    let fahrenheit = document.getElementById("degrees").value;
    let celsius = (fahrenheit - 32)*(5/9);
    document.getElementById("celsius").innerHTML = celsius;
}


