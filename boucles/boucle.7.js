const prompt = require("prompt-sync")();

let n  = parseInt(prompt("entrez un nombre: "))

let resultat = 0;

while (n > 0) {
    let f = n % 10;
    resultat = resultat*10 + f ;
    n = Math.floor(n / 10);
}
console.log(resultat);