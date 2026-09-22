const prompt = require("prompt-sync")();

let text = prompt("enrez un text:");
let e = " ";
for (let i = text.length - 1 ; i >= 0 ; i-- ) {
    e += text[i];
}

console.log(e);
