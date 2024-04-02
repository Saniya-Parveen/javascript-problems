//Count the Number of Vowels in a Given String
//Given a string str, return the number of vowels in the string.


let str = "Hello World";
let vowels = ["a", "e", "i", "o", "u"];
let vowelcount = 0;
for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
        vowelcount++;
    }    
}
console.log(vowelcount);