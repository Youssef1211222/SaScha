const prompt = require("prompt-sync")();

let n = parseFloat(prompt("entrez un nombre : "));


let b = 0 ;
function fibonacci(a) {
   for ( let i = 1 ; i <= a ; i++) {
    b += i;
   
    
   }
     return b;
}


let resultat = fibonacci(n);

console.log(resultat);