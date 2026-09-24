const prompt = require("prompt-sync")();


let n = parseInt(prompt("entrez un nombre : "));
let r = n;
function factorielle(a) {
    for (let i = a - 1 ; i > 0 ; i--) {

      r *= i
        
    }
    return r;
}
let resultat = factorielle(n);

console.log(resultat);

