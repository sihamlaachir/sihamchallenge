const prompt = require("prompt-sync")();
let a = prompt("entrer le nombre d' element");
let tab = [];
function maxTableau(){
let max = 0;
for (i=0 ; i<a ; i++){
let j =parseInt(prompt("entrer un nombre "));
        tab.push(j);
         if (tab[i] > max)
             max = tab[i];
        };
return max; 
}
M = maxTableau();
console.log("le plus grand est :" +M)