var numero1  = prompt("inserisci un numero");

var numero2 = prompt("inserisci un secondo numero");

if (numero1 > numero2){
  console.log(numero1);
} else if (numero1 == numero2){
  document.getElementById('numerogrande').innerHTML = "i 2 numeri sono uguali";
} else {
console.log(numero2);
}
