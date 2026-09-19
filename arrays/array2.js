//const fruits = ["pomme", "banane", "orange"]

//console.log(fruits.includes("banane")) // true
//console.log(fruits.includes("kiwi"))   // false

//console.log(fruits.indexOf("banane"))
//console.log(fruits.indexOf("kiwi"))



const prompt = require("prompt-sync")();


let elements = parseInt(prompt("entrez le nombre d'éléments "));

let tableau = [];

for (let i = 0 ; i < elements; i++) {
    let nombre = prompt("entrez le èlément: ");
    tableau += nombre + " ";

}

console.log(tableau);