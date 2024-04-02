function rotateArray(arr, rotate){
    for(let i = 0; i < rotate; i++){
        arr.push(arr.shift());

    }
    return arr;
}
const arr = [1, 2, 3, 4 ,5];
const rotate = 2;
console.log(rotateArray(arr, rotate));