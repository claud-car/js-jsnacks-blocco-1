var parola1 = prompt("inserisci una parola");

var parola2 = prompt("inserisci una seconda parola");

var paroleuguali = "Le parole sono uguali";

if(parola1 > parola2){
  console.log(parola2, parola1);
  // console.log(parola1);
}else if(parola1 == parola2){
  console.log(paroleuguali);
}else{
  console.log(parola1, parola2);
  // console.log(parola2);
}
