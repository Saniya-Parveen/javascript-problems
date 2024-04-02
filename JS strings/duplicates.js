/*Remove Duplicate Characters From a String
Given a string str, return a new string that has all duplicate characters removed*/

let str = "hello";
let duplicate = "";
for(let i = 0; i < str.length; i++){
    if(!duplicate.includes(str[i])){
        duplicate += str[i];
    }
}
console.log(duplicate);