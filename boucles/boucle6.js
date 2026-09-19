const prompt = require("prompt-sync")();

let nombre = parseInt(prompt("entrez un nombre: "));

for (let i = 1 ; i <= nombre * 2 ; i ++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}