var button = document.getElementById("button");

function log() {
    var grunnTall = document.getElementById("input").value;
    var antallPotenser = document.getElementById("input2").value;
    console.log("Grunntall er: " + grunnTall);
    console.log("Antall potenser er: " + antallPotenser);
    console.log(" ");
    console.log(" ");
    for(var i = 1; i<=antallPotenser; i++) {
        console.log(grunnTall + "^" + i + " = " + Math.pow(grunnTall, i));
    }
}