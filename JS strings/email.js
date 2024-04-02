/*Check If a String Is a Valid Email Address
Given a string str, return true if str is a valid email address, otherwise return false.*/

let str = "example@example.com"
let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let newStr = isEmail.test(str);
console.log(newStr);
   

