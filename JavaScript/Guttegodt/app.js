const canvas = document.querySelector("#myCanvas"); //Henter canvas element (ENDRE ID HVIS DU HAR ANNEN ID)
const ctx = canvas.getContext("2d"); //Henter canvas context 2d

const data = [{ //Du må sende inn et array med objekter på denne formen
        description: "Eksempel 1:",
        value: 10
    },
    {
        description: "Eksempel 2:",
        value: 7
    }
];

function drawDiagram(array) {
    let textWidth = 200; //Bredde på teksten
    let barWidth = canvas.width - textWidth - 10; //Hvor store søylene skal være
    canvas.height = array.length * 30; //Setter høyden på canvaset ut ifra hvor mange søyler
    let max = 0; //En variabel som sier hvem av søylene som er lengst
    array.forEach(el => {
        if (el.value > max) max = el.value
    });
    ctx.font = "24px 'Century Gothic'"; //Fontstørrelse og type font
    ctx.textAlign = "end"; //Sier hvor texten skal alignes
    ctx.textBaseLine = "hanging"; //Sier hvordan teksten skal tegnes
    array.forEach(el => {
        let share = (el.value / max) * barWidth; //Hvor stor i forhold til max bredde
        ctx.fillStyle = "#323232"; //Font farge
        ctx.fillText(`${el.description} (${el.value})`, textWidth, (30 * array.indexOf(el)) + 20); //Fyller description
        ctx.fillStyle = `hsl(${array.indexOf(el) * 30}, 100%, 70%)`; //Søylefarge
        ctx.fillRect(textWidth + 5, (30 * array.indexOf(el)) + 3, share, 24); //Fyller søyle
    });
}
drawDiagram(data); //Kaller funksjonen og sender inn et Array med objekter skrevet på formen {description : STRING, value: INTEGER}