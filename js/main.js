const arrayNumRandom = [];
const stampaNumRandom = document.getElementById("main");
const arrayUtente = [];
let contNumAzzeccati = 0;
const arrayNumAzzeccati = [];


function randomNum() {
    for(let i=0; arrayNumRandom.length<5; i++){
        numRandom = +Math.floor(Math.random()*(5-1+1)+1);
        if (!arrayNumRandom.includes(numRandom)){
            arrayNumRandom.push(numRandom);
        }
    }
}

function stampaNumeriRandom() {
    stampaNumRandom.innerHTML = arrayNumRandom;
    
}

function scomparireNumRan() {
    stampaNumRandom.innerHTML = "";
}

function chiediNumeri() {
    for(let i=0; arrayUtente.length<5; i++ ){
        const numeroUtente = parseInt(prompt("dammi un numero"));
        arrayUtente.push(numeroUtente);
    }
    controlloNumeri()
}

function controlloNumeri() {
    for(let i=0; i<5; i++){
        if(arrayUtente.includes(arrayNumRandom[i])){
            contNumAzzeccati++;
            arrayNumAzzeccati.push(arrayNumRandom[i]);
        }
    }
    console.log(arrayNumRandom);
    stampaNumRandom.innerHTML=  `${contNumAzzeccati} numero/i azzeccato/i e sono:` + arrayNumAzzeccati;
}

randomNum();
stampaNumeriRandom();
setTimeout(scomparireNumRan, 2000);
setTimeout(chiediNumeri, 2100);







