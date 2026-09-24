const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("entrez le promire nombre: "));

let n2 = parseFloat(prompt("entrez le deuxiem nombre: "));


function calcul_somme(a , b) {
    return a + b ;
}

let result = calcul_somme(n1 , n2);

console.log(`${n1} + ${n2} = ${result}`);