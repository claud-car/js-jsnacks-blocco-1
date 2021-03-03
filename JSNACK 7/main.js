// var due = 2;
// console.log(due);
//
// for (var i = 0; i < 1000; i++) {
//   var due = due * 2;
//   console.log(due);
//   if (due > 1000) {
//     break;
//     console.log(due);
//   }
// }

var soldato = true;

for (var i = 0; soldato; i++) {
  var potenza= Math.pow(i,2);
  if (potenza >= 1000){
    soldato= false;
  }
  document.getElementById("numero").innerHTML+= i + " " + potenza + "<br>"
}
