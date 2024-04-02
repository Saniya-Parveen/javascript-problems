//Remove Duplicates from an Array

function duplicatesofArray(arr){
    let duplicate = [];
    for(let i = 0; i < arr.length; i++){
         if(!duplicate.includes(arr[i])){
            duplicate.push(arr[i]);

            }
        }
    return duplicate;
}
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(duplicatesofArray(arr));