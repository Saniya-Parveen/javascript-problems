function largestofNumber(arr){
    let largestNumber = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }

    }
    return largestNumber;
}
const arr = [2, 5, 8, 12, 3];
console.log(largestofNumber(arr));