const prompt = require("prompt-sync")();

let objet = {
    x : 0 ,
    y : 0
}


let cont = "oui".toLowerCase();

while (cont === "oui") {
   objet.x = parseFloat(prompt("entrez x: "));
   objet.y = parseFloat(prompt("entrez y: "));

   console.log(`x: ${objet.x}`);
   console.log(`y: ${objet.y}`);


 cont = prompt("voulez vous modefie le point? (oui ou no) ");

}




