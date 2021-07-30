//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numerogiocatore = Math.floor(Math.random()*6) + 1;
var numeropc = Math.floor(Math.random()*6) + 1;
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numerogiocatore > numeropc) {
    alert("hai vinto!")
} else {
    alert("hai perso")
}