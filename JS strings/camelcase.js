/*Convert a String to camelCase
Given a string str, return a new string where spaces are replaced by camel case.
Input: str = "hello world"
Output: "helloWorld"*/

let str = "hello world";
let newStr = "";
for(let i = 0; i < str.length; i++){
    if(str[i] !== " "){
        newStr += str[i]
    
    }else{
        newStr += str[i + 1].toUpperCase();
        i++;
    }
}
console.log(newStr);
