const prompt = require("prompt-sync")();

const text = prompt("entrez un text: ");

const c = prompt("entrez un caractère: ");

let n = 0;

for (t of text) {
    
    if (t === c) {
        n++;
    }
}
console.log(n);