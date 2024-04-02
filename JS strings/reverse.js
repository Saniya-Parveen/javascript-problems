//Reverse a String Without Using the reverse() Method
//Given a string str, return a new string that is the reverse of str without using the reverse() method.

let str = "Saniya";
let reversed = "";
for(let i = str.length-1; i >= 0; i--){
    reversed += str[i]
}
let newStr = reversed;
console.log(newStr);

