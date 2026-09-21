const prompt = require("prompt-sync")();

let e = parseInt(prompt("entrez le nombre d'èléments: "))

let t = [];
let somme = 0;
for (i = 0 ; i < e ; i ++) {
    let u = parseInt(prompt("entrez la nombre: "));
    t += u;
    somme += u

}
console.log(`--la somme est :  ${somme}`);