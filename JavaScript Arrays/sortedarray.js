function sortArray(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > sortedArr[i + 1]){
            return false;

        }
    } 
    return true;       
}
const arr = [1, 2, 3, 4, 5];
console.log(sortArray(arr))
