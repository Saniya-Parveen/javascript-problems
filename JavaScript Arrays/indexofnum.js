function indexofNumber(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;

        }
    }
    return -1;

}
const arr = [5, 2, 8, 12, 3];
const num = 8;
console.log(indexofNumber(arr, num));