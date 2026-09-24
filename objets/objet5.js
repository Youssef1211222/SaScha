const prompt = require("prompt-sync")();



function modfie_levre() {
    let titre = prompt("entrez le titre: ")
    let auteur = prompt("entrez l'auteur: ");
    let annee = parseInt(prompt("entrez année: "))

    return {
        titre : titre,
        auteur : auteur,
        annee : annee
    }

}

let livre = modfie_levre()


console.log(livre)