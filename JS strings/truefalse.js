//Check If a String Contains Only Digits
//Given a string str, return true if str contains only digits, otherwise return false.

let str = "12345";
let isDigit = true;
for(let i = 0; i< str.length; i++){
   if(isNaN(parseInt(str[i]))){
      isDigit = false;
   }
}
console.log(isDigit)

