const prompt = require("prompt-sync")();

let Nval = parseInt(prompt("entrez le nombre de l'éléments : "));

const t = [];

for (let i = 0 ; i < Nval ; i ++) {
    let valu = parseInt(prompt("entrez la valure: "))
    t.push(valu);
}

const t2 = [];

for (let i = t.length-1; i >= 0 ; i--) {
    t2.push(t[i]);
}

console.log(t2);




