const prompt = require("prompt-sync")();

function ajouter_livre() {
    let titre = prompt("entrez le titre de livre: ");
    let auteur = prompt("entrez l'auteur de livre: ");
    let prix = parseFloat(prompt("entrez le prix du livre: "));
    let stock = parseInt(prompt("entrez la quantité en stock: "));

    return {
        Titre : titre,
        Auteur : auteur,
        Prix : prix,
        stock : stock
    }
}


let livres = [];


let boucle = true;

while (boucle){
    
let user = parseInt(prompt(`choisir un nombre:
    1: pour ajoutez un livre
    2: pour change le stock
    3: pour supprimer un livre
    4: pour affiche livres
    5: pour quite
         
    
        :`));
switch (user) {
    case 1:
        let livre = ajouter_livre();

        livres.push(livre)

        break;
    case 2:
        let chek = prompt("entrez le titre de livre: ");
        let chang = parseInt(prompt("modifier le stock: "));
        for (livre of livres) {
            if (livre.Titre === chek) {
                livre.stock = chang;
            }
        }
            break;
    case 3:

    let chek2 = prompt("entrez le nom de livre pour suprimer: ");
    
    for (let i = 0 ; i < livres.length ; i++){
        if(livres[i].Titre === chek2) {
            livres.splice(i , 1)
        }
    }
        break;


    case 4:

    console.log(livres);

    break;

    case 5:

    boucle = false;

    break;
        }
  };








