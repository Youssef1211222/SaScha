const prompt = require("prompt-sync")();



let text = prompt("entrez le text: ");
let n = 0;
for (i of text) {
    n++;
}
    console.log(n);
