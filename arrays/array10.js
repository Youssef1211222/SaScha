const prompt = require("prompt-sync")();

let valuN = parseInt(prompt("entrez le nombre de l'éléments: "));

const tableau = [];

for (let i = 0 ; i < valuN ; i++) {
    let val = parseInt(prompt("entrez un nombre: "));
    tableau.push(val);
}

let r = parseInt(prompt("quel le nombre tu vous rechercher: "))

for (let i = 0 ; i < valuN ; i ++) {
    if(tableau[i] === r) {
        console.log(`le nombre ${r} disponible`);

    }
}

