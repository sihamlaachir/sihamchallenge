const prompt = require("prompt-sync")();
let a = prompt("entrer un nombre");
let tab = [];
let compteur = 0;
function compterOccurrences(){
    let b = prompt("entrer le nombre a chercher");
    for (i=0 ; i<a ; i++){
        let j = prompt("entrer un element");
        tab.push(j);
        if (tab[i] == b)
            compteur++;
    }
return compteur ;
}
C = compterOccurrences();
console.log("nombre de fois est :"+C);