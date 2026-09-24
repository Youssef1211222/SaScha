const arr = [1,1,2,3,3,3,4,4,5,4,4];


const arrr = [];

for (let i = 0 ; i < arr.length - 1 ; i++ ) {
    let j = i +1;
    if ( arr[i] === arr[j]) {
        arrr.push(arr[i])

    }

}


console.log(arrr)