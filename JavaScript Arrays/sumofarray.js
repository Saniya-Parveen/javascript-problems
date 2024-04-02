function sumArray(arr){
    let sumArr = 0;
    for(let i = 0; i < arr.length; i++){
        sumArr += arr[i];
    }
    return sumArr;
}
const arr = [5, 2, 8, 12, 3];
console.log(sumArray(arr));