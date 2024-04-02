function findMaxElement(arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}
const arr = [5, 2, 8, 12, 3];
console.log(findMaxElement(arr)); 

