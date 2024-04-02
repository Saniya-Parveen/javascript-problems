function missingNumber(arr){
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((sum,num)=> sum + num, 0);
    return totalSum - arraySum;
}
const arr = [1, 2, 4, 5, 6];
console.log(missingNumber(arr));