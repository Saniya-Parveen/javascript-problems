/*Capitalize the First Letter of Each Word in a String
Given a string str, return a new string where the first letter of each word is capitalized.*/

let str = "hello world";
let words = str.split(" ") ;
for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    words.join(" ");
}
let capitalized = words.join(" ");
console.log(capitalized)
