const prompt = require("prompt-sync")();
let a = prompt("entrer un nobmre");
let tab = [];
function sommeTableau(){
    let somme = 0 ;
   
    for(i=0 ; i<a ; i++){
    
    let j =parseInt(prompt("entrer un element"));
        tab.push(j);
     somme += tab[i]; 
    }
return somme;
}
s=sommeTableau();
console.log("la somms est :" +s);