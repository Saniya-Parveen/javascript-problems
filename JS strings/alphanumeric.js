/*Check If a String Contains Only Alphanumeric Characters
Given a string str, return true if str contains only alphanumeric characters, otherwise return false.
Input: str = "123abc"
Output: true*/

let str = "123abc";
let isAlphanumeric = /^[a-zA-Z0-9]+$/.test(str);
console.log(isAlphanumeric);