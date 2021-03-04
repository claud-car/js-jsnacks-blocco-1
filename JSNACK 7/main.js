// POTENZA DI 2 DI TUTTI I NUMERI

var soldato = true;

for (var i = 1; soldato; i++) {
  var potenza= Math.pow(i,2);
  if (potenza >= 1000){
    soldato= false;
  }
  document.getElementById("numero").innerHTML+= i + " " + potenza + "<br>"
}


// TUTTE LE POTENZE DI 2

for (var j = 0; Math.pow(2,j) < 1000; j++) {
  console.log(Math.pow(2,j));
}
