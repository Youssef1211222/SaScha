let prompt = require("prompt-sync")();

let a = parseFloat(prompt("entrez la nombre a: "));
let b = parseFloat(prompt("entrez la nombre b: "));


console.log(`
    ${a + b}
    ${a - b}
    ${a /b}
    ${a * b}
    
    `);