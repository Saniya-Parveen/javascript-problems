//Determine If a String Is a Palindrome
//Given a string str, return true if str is a palindrome, otherwise return false.

let str = "racecar";
let reversedStr = str.split('').reverse().join('');
let isPalindrome = true;
for(let i = 0; i < str.length; i++){
    if(str[i] !== reversedStr[i]){
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);
