var listamail = ["roccorocco@gmail.com", "pippopippo@gmail.com"];

//Chiedi all’utente la sua email,
var email = prompt("inserisci la tua mail");

listamail.push (email);

//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

for ( var i = 0; i < listamail.length; i++) {
    if ( listamail [i] == email) {
        alert("Benvenuto!")
    }
}