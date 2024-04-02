//Find the Intersection of N Arrays

function intersectionNarray(arr1, arr2, arr3){
    let intersection = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            for(let k = 0; k < arr3.length; k++){
                if(arr1[i] === arr2[j] && arr1[i] === arr3[k]){
                    intersection.push(arr1[i]);
                }
            }

        }
    }
    return intersection;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const arr3 = [7, 8, 9];
console.log(intersectionNarray(arr1, arr2, arr3));