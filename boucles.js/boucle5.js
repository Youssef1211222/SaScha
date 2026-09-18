const prompt = require("prompt-sync")();

let a = parseInt(prompt("entrez la nombre un: "));
let b = parseInt(prompt("entrez la nombre deuxiem: "));
let c = 1;
for (i = 1 ; i <= b ; i++) {
    c = a * a;

}
 console.log(c);