const prompt = require("prompt-sync")();

let accordee = parseInt(prompt("entrez la total de congés: "));

let utilisee = parseInt(prompt("entrez la nombre de jour utilisès: "));

let statut = parseInt(prompt(`
    ----choisire 0 ou 1 :
    -- 0: pour temps partiel
    -- 1: pour temps plein
   `))

   let restans = 0 ;


   switch (statut) {
    case 0:
        restans = (accordee / 2) - utilisee;
        break;
    case 1:
        restans = accordee - utilisee;
        break;

        }
        console.log(restans);

    
   