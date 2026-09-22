
let etudiant = {
    nom: "lakhal",
    prenom: "lakhal",
    notes: [14, 16, 12, 18, 15] 
};

console.log (`
le nom : ${etudiant.nom} 
le prenom : ${etudiant.prenom}
    `);
console.log(`
les notes : ${etudiant.notes.join("-")}    
    `)
let somme = 0;
for (let i = 0 ; i < etudiant.notes.length -1 ; i ++) {
    somme += etudiant.notes[i];
}
let moyen = somme / etudiant.notes.length - 1 ; 
console.log(`le moyen : ${moyen}`)