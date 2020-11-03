var wincount = 0;
var losecount = 0;
function generate(){
    let guess = document.getElementById("input").value;
            for(let i = 0; i<10000; i++){
            let random = Math.floor(Math.random() * 101);
            if (guess == random){
                wincount++;
            }
            else{
                losecount++;
                }
            }
            console.log(((wincount/losecount) * 100).toFixed(2) + " skal være cirka lik 1")
}
