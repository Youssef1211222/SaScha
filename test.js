const arr = [4,3,5,1,8,9];

console.log(arr)
let a = 0 ; 
for (let i = 0 ; i < arr.length - 1 ; i ++){
    for (let j = i + 1 ; j < arr.length ; j++){
        if (arr[i] > arr[j]){
            a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;

        }
    }
}


console.log(arr)