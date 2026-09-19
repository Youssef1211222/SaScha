//const fruits = ["pomme", "banane", "orange"]

//console.log(fruits.includes("banane")) // true
//console.log(fruits.includes("kiwi"))   // false

//console.log(fruits.indexOf("banane"))
//console.log(fruits.indexOf("kiwi"))



const prompt = require("prompt-sync")();

// 1. Demander le nombre d'éléments
let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));

// 2. Initialiser un tableau vide
let monTableau = [];

// 3. Boucle de saisie
for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    // 4. Ajout de la valeur à la fin du tableau
    monTableau.push(valeur);
}

// 5. Affichage final
console.log("Voici votre tableau :");
console.log(monTableau);