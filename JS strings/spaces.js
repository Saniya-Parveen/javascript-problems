/*Remove All Spaces From a String
Given a string str, return a new string that has all spaces removed*/

let str = "hello world"
let newStr = "";
for(let i = 0; i < str.length; i++){
    if(str[i] !== " "){
        newStr += str[i];
    }
}
console.log(newStr)