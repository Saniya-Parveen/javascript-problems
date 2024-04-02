function findMinEle(arr){
    let minElements = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minElements){
            minElements = arr[i];
        }
    }
    return minElements;
}
const arr = [5, 2, 8, 12, 3];
console.log(findMinEle(arr));