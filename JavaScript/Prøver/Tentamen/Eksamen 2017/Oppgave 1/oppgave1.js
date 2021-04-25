const mdgIMG = document.querySelector("#mdg");
const spIMG = document.querySelector("#sp");

const piano = document.querySelector("#piano");
const video = document.querySelector("#spvideo")

const closesp = document.querySelector("#closesp");
const closemdg = document.querySelector("#closemdg");

const mdgDiv = document.querySelector("#mdgDiv");
const spDiv = document.querySelector("#spDiv");

const showMdg = () => {
    console.log("show mdg")
    piano.play();
    mdgDiv.style.display = "block";
}

const hideMdg = () => {
    console.log("hide mdg")
    piano.pause();
    mdgDiv.style.display = "none";
}

const showSp = () => {
    console.log("show sp")
    video.play();
    spDiv.style.display = "block";
}

const hideSp = () => {
    console.log("hide sp")
    video.pause();
    spDiv.style.display = "none";
}

mdgIMG.addEventListener("click", showMdg);
closemdg.addEventListener("click", hideMdg);

spIMG.addEventListener("click", showSp);
closesp.addEventListener("click", hideSp);