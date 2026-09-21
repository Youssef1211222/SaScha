const prompt = require("prompt-sync")();

let u = parseInt(prompt("entrez le nombre de l'éléments: "))


const t = [];
for (let i = 0 ; i < u ; i++){
    let v = parseInt(prompt("entrez le nombre de l'élément :"));
    t.push(v);
}


const  tc = [];
for (let i = 0 ; i < t.length ; i++) {
    tc.push(t[i])
}
console.log(`original: ${t}`);
console.log(`coppy: ${tc}`);