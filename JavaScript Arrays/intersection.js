//Find the Intersection of Two Arrays

function intersectionofArray(arr1, arr2){
    let intersection = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                intersection.push(arr1[i]);

        }
    }
        
    }
    return intersection;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(intersectionofArray(arr1, arr2));