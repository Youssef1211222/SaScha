const prompt = require("prompt-sync")();

let annee = parseInt(prompt("entrez un annèe: "));

let normalannee = 365;
let bissextileannee = 366;
if (annee % 4 === 0 && annee !== 100 || annee % 4 === 0) {
    annee = normalannee;

}else {
    annee = bissextileannee;
    
};
 

let menu = prompt(`
    --- choisier
    -- a for mois
    -- b for jours
    -- c for heures
    -- d for minutes
    -- e for secondes
    `);

let mois = 12

switch (menu) {
    case "a": 
        console.log(`mois: ${mois}`);
        break;
    case "b":
        console.log(annee);
        break;
    case "c":
        let heures = annee * 24;
        console.log(`heures: ${heures}`);
        break;
    case "d":
        let minutes = heures * 60;
        console.log(`minutes: ${minutes}`);
        break;
    case "e":
        let secondes = minutes * 60;
        console.log(`secondes: ${secondes}`);
        break;


}
