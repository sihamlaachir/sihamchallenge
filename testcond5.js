const prompt = require("prompt-sync")();
let a = prompt("entrer un nombre");
switch(true){
    case (a>90 && a<100):
    console.log("note : A");
    break;
    case (a>80 && a<89):
    console.log("note : B");
    break;
    case(a>70 && a<79):
    console.log("note : C");
    break;
    case(a>60 && a<69):
    console.log("note : D");
    break;
    case(a<60):
    console.log("note : F");
    break;

}