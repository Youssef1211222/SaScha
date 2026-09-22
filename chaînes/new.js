const tableau = [5,4,2,6,7,4];

for ( let i = 0 ; i < tableau.length - 1 ; i++) {
    if ( tableau[i] + 1 === tableau[i +1]) {
        console.log(`${tableau[i]}  ${tableau[i +1]} `)
        break;
    }
}
    
