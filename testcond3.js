const prompt = require("prompt-sync")();
let age = prompt("entrer votre age");
if (age >= 18){
    console.log("Éligibl au vote");
}
else{
    console.log("Non éligible");
} 
    
