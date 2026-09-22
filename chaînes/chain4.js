const prompt = require("prompt-sync")();

let text1 = prompt("entrez un text: ");
let text2 = prompt("entrez un text: ");

if (text1 === text2) {
    console.log("égales");
}else{
    console.log("différentes");

}
