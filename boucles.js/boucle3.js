const prompt = require("prompt-sync")();

let nombre = parseInt(prompt("entrez un nombre: "));

let s = 0;

for (i = 1 ; i <= nombre ; i ++){ ;

    s += i;

}

 console.log(` ${s}`);