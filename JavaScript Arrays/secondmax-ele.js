function secondMaxEle(arr){
    let maxElement = arr[0];
    let secondMaximumEle = arr[0];
    for(let i = 0; i < arr.length; i++){
       if(arr[i] > maxElement){
          secondMaximumEle = maxElement
          maxElement = arr[i];
       }
       else if(arr[i] > secondMaximumEle && arr[i] !== maxElement){
        secondMaximumEle = arr[i];
       }
    }
    return secondMaximumEle;
}
const arr = [5, 2, 8, 12, 3];
console.log(secondMaxEle(arr))