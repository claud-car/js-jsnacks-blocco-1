var numero= parseInt(prompt("dammi un numero:"));

if (isNaN(numero)){
  console.log("ti avevo chiesto un numero!");
} else {
  for (var i = 1; i <= numero; i++) {
    var cubo = Math.pow(i,3);
    console.log(cubo);
  }
}
