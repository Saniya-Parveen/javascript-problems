//Count the Number of Occurrences of a Specific Character in a String
//Given a string str and a specific character ch, return the number of times ch occurs in str.

let str = "hello";
let character = "e";
let count = 0;
for(let i = 0; i< str.length; i++){
    if(character === str[i]){
        count++; 
    }
}

console.log(count);