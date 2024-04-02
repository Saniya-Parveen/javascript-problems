/*Check If a String Is a Valid URL
Given a string str, return true if str is a valid URL, otherwise return false.
Input: str = "http://www.example.com"
Output: true*/

let str = "http://www.example.com";
let isUrl = /^(ftp|http|https):\/\/[^ "]+$/;
let newStr = isUrl.test(str);
console.log(newStr);


