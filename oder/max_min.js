let n = 53871;


let max = 0 ;
let min = 0;
for (let i = 0 ; i < 5 ; i++){
    let f = n % 10 ;
    let x = f;
    n = Math.floor(n / 10);
    if (f !== 1) {
        max+= x;
          
      
    }

    }
    console.log(max)
n = 53871;

    for (let i =0 ; i < 5 ; i++){
        let f = n % 10;
        let x = f;
        n = Math.floor(n / 10);
        if (f !== 8) {
            min +=x
        }
    }
    console.log(min);


