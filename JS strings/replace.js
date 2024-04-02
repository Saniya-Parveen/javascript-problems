/*Replace All Occurrences of a Specific Character in a String With Another Character
Given a string str, a specific character ch1, and another character ch2, return a new string where all occurrences of ch1 are replaced by ch2.
Input: str = "hello world", ch1 = "o", ch2 = "a"
Output: "hella warld"*/

let str = "hello world";
let ch1 = "o";
let ch2 = "a";
let newStr = "";
for(let i = 0; i < str.length; i++){
    if(str[i] === ch1.replace(ch2)){
        newStr += ch2;
    }else{
        newStr += str[i];
    }
}
console.log(newStr);

