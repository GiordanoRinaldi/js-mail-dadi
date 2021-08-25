var listamail = ["roccorocco@gmail.com", "pippopippo@gmail.com"];

//Chiedi all’utente la sua email,
var email = prompt("inserisci la tua mail");

//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

var controllo = false;

for ( var i = 0; i < listamail.length; i++) {
    if ( listamail [i] == email) {
       controllo = true;
    }
}

if (controllo = true ) {
    alert('Benvenuto!')
}