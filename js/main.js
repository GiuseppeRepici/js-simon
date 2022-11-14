const arrayNumRandom = [];
const stampaNumRandom = document.getElementById("main");
const arrayUtente = [];
let contNumAzzeccati = -1;
const arrayNumAzzeccati = [];
let sec= 5;
const secondi = document.getElementById("secondi");


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
    setInterval(timer, 1000);
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
    if(contNumAzzeccati<0){
        stampaNumRandom.innerHTML= "nessun numero azzeccato, complimenti!";
    } else{
        stampaNumRandom.innerHTML=  `${contNumAzzeccati} numero/i azzeccato/i ed è/sono:` + arrayNumAzzeccati;
    }
    
}

function timer() {
    secondi.innerHTML= "secondis:" + `${sec}`;
    if (sec>0){
        sec--;
    } else{
        secondi.innerHTML= "";
        scomparireNumRan();
        setTimeout(chiediNumeri, 100);
        return;
    }
}

randomNum();
stampaNumeriRandom();








