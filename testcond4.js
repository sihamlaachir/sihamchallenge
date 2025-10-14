const prompt = require("prompt-sync")();
let a = prompt("entrer la valeur de a");
console.log(" a = "+a);
let b = prompt("entrer la valeur de b");
console.log(" b = "+b);
if(a>b){
     console.log(" le maximum de nombres est a :"+a);
}
  else {
        console.log(" le maximum de nombres est b :"+b);
}