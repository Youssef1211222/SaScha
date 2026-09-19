const prompt =require("prompt-sync")();

let vitesse = parseFloat(prompt("entrez la vitesse en kilomètres: "));

let transforme = vitesse * 0.27778;


console.log(`la vitesse en mètres par soconde :${transforme}`);