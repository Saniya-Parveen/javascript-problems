function secondMinEle(arr){
    let minElement = arr[0];
    let secondMinimumEle = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minElement){
            minElement = secondMinimumEle;
            minElement = arr[i];
        }
        else if(arr[i] < secondMinimumEle && arr[i] !== minElement){
            secondMinimumEle = arr[i];
        }
    }
    return secondMinimumEle;
}
const arr = [5, 2, 8, 12, 3];
console.log(secondMinEle(arr));