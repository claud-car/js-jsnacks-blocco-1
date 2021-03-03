listanumeridispari= [];

for (var i = 0; i < 6; i++) {
  var numeri = parseInt(prompt("Dammi un numero"))
  if (numeri %2){
    var listanumeri = [numeri];
    listanumeridispari.push(listanumeri);
  }
}

console.log(listanumeridispari);
