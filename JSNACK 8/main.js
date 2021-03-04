var numero = prompt("Dammi un numero a 4 cifre");
console.log(numero);

var sommanumeri= 0

for (var i = 0; i < numero.length; i++) {
  sommanumeri += parseInt(numero[i]);
}

console.log(sommanumeri);
