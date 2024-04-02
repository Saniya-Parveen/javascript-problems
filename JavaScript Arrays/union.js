//Find the Union of Two Arrays

function unionofArray(arr1, arr2){
    let union = [];
    for(let i = 0; i < arr1.length; i++){
        if(!union.includes(arr1[i])){
            union.push(arr1[i]);
            }
        }
        for(let j = 0; j < arr2.length; j++){
            if(!union.includes(arr2[j])){
                union.push(arr2[j]);
            }
        }
        return union;
    }
    

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(unionofArray(arr1, arr2));