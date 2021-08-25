var listamail = ['giordanorinaldi0@gmail.com', 'roccorocco@gmail.com', 'pippopippo@gmail.com'];
//Chiedi all’utente la sua email,
var mailutente = prompt("inserisci la tua email")
//controlla che sia nella lista di chi può accedere,
var controllo = false;
for ( var i = 0; i < listamail.length; i++ ) {
    if ( listamail[i] == mailutente ) {
        controllo = true;
    }
}
//stampa un messaggio appropriato sull’esito del controllo.
if (controllo == true) {
    alert("Benvenuto")
} else {
    alert("La sua mail non é presente")
}