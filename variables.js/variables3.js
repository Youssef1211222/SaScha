const prompt = require("prompt-sync")();

let km = parseFloat(prompt("entrez la distance en km/h :"));

let yards = km * 1093.61;

console.log(`la distance en yards est : ${yards}`);