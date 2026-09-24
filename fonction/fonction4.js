const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("entrez le nombre un : "));
let n2 = parseFloat(prompt("entrez le nombre deux : "));



function grand(a , b) {
    if ( a > b) {
        return `Le plus prtit nombre est ${b}`;
    }else if ( a < b) {
        return `Le plus petit nombre est ${a}`;
    }else{
        return `Le nombre ${a} et le nombre ${b} son égaus`
    }
}

let resultat = grand(n1 , n2);

console.log(resultat);