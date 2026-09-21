const prompt = require("prompt-sync")();

let e = parseInt(prompt("entrez le nombre d'èléments: "))

const t = [];
let max = 0 ;
for (let i = 0 ; i < e ; i++) {
    let u = parseInt(prompt("entrez la nombre: "));
    t.push(u) ;

    if ( max > t[i]) {
        max = t[i];
    
    }
}

console.log(max);
