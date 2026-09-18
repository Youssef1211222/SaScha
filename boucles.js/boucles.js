const prompt = require("prompt-sync")();

let n = parseInt(prompt("entrez un nombre: "))

for (i = 1 ; i <= n ; ) {
    let a = n * i;
    console.log(`${n} * ${i}: ${a}`);
    i++
}