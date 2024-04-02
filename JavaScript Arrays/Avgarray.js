function avgArray(arr){
    let averageArray = 0;
    for(let i = 0; i < arr.length; i++){
        averageArray += arr[i] / arr.length;
    }
    return averageArray
}
const arr = [5, 2, 8, 12, 3];
console.log(avgArray(arr));