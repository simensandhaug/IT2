//HTML Elementer
const skoyteknapp = document.querySelector("#skoyteknapp");
const skihoppknapp = document.querySelector("#skihoppknapp");
const skihoppvideo = document.querySelector("#skihoppvideo");
const skihoppdiv = document.querySelector("#skihopp");
const skoytediv = document.querySelector("#skoyteanimasjon");
const skoyteaudio = document.querySelector("#skoyteaudio")
const bildediv = document.querySelector("#bilder")

const skihopplukk = document.querySelector("#skihopplukk");
const skoytelukk = document.querySelector("#skoytelukk");

skoytelukk.style.display = "none";

//Skjuler de to divene
skihoppdiv.style.display = "none";
skoytediv.style.display = "none";


const handleSkihopp = () => { //Funksjon som håndterer når skihopp vises
    skoytediv.style.display = "none";
    bildediv.style.display = "none";

    skihoppvideo.play();
    skihoppdiv.style.display = "block";
}

const handleSkoyte = () => { //Funksjon som håndeterer når skøyting vises
    skihoppdiv.style.display = "none";
    bildediv.style.display = "none";
    skoytelukk.style.display = "block";

    skoyteaudio.play();
    skoytediv.style.display = "block";
}


//Lyttere som kjører sine respektive funksjoner når bildene blir trykket på
skihoppknapp.addEventListener("click", handleSkihopp);
skoyteknapp.addEventListener("click", handleSkoyte);

skihopplukk.addEventListener("click", () => { //Skjuler skihopp
    bildediv.style.display = "flex";
    skihoppdiv.style.display = "none";
    skihoppvideo.pause();
});

skoytelukk.addEventListener("click", () => { //Skjuler skoyting
    bildediv.style.display = "flex";
    skoytediv.style.display = "none";
    skoytelukk.style.display = "none";
    skoyteaudio.pause();
});