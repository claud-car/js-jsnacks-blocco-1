var lista = ["mario" , "luca", "andrea", "raffa", "ale", "fabri", "claudio", ]
console.log(lista);

var utente = prompt("Ciao,inserisci il nome per farmi sapere se sei nella lista");
console.log(utente);

var checklista = false;

for (var i = 0; i < lista.length; i++) {
  if (lista[i] == utente) {
    checklista = true;
    console.log(checklista);
  }
}

if (checklista){
  var checklista = "Ciao " + utente + ", sei nella lista, benvenuto";
  console.log(checklista);
} else {
  var checklista = "Spiacente, " + utente + ", non sei nella lista e non puoi accedere."
  console.log(checklista);
}
