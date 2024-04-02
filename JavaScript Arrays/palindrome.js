//Check for Palindrome Array

function isPalindrome(arr){
    const reversedArr = arr.slice().reverse();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== reversedArr[i]){
            return false;

        }

        
    }
    return true;
}
console.log(isPalindrome([1, 2, 3, 2, 1]));