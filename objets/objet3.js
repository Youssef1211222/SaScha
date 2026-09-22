const prompt = require("prompt-sync")();

let objet = {
    longueur : parseInt(prompt("entrez longueur: ")) ,
    largeur : parseInt(prompt("entrez largeur"))
}

function calcul(objet) {
    return objet.longueur * objet.largeur;
}


let aire =  calcul(objet);
console.log(aire)





