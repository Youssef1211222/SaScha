const prompt = require("prompt-sync")();


let tab = parseInt(prompt("entrez le nombre de l'éléments: "));

let x = 0;


let tableau = [];

for (let i = 0 ; i < tab ; i++) {
    let val = parseInt(prompt("entrez le nombre: "));
    tableau.push(val);
}

for (let i = 0 ; i < tableau.length-1; i ++) {
    for(j=i+1;j<tableau.length;j++){
     if (tableau[i] > tableau[j]) {
     
        x = tableau[i];
        tableau[i] = tableau[j];
        tableau[j] = x;
        
     }
}
}
console.log(tableau)