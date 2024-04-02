function unionNarray(arr1, arr2, arr3){
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
    for(let k = 0; k < arr3.length; k++){
        if(!union.includes(arr3[k])){
            union.push(arr3[k]);
        }
    }
    return union;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const arr3 = [7, 8, 9];
console.log(unionNarray(arr1, arr2, arr3));