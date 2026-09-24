const arr = [4,9,2,9,7];
let max = 0;
for ( let i = 0 ; i < arr.length ; i++) {
    for ( let j = i + 1 ; j < arr.length ; j++) {
        if ( arr[i] > arr[j]) {
            max = arr[i] ;
            arr[i] = arr[j] ;
            arr[j] = max;

        }
        
    }
}
console.log(max)
