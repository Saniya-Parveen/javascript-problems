/*Convert a String to a Number Without Using parseInt() or parseFloat()
Given a string str, return a number equivalent to str without using parseInt() or parseFloat().
Input: str = "12345"
Output: 12345*/

let str = "12345";
let number = 0;
const zeroCharCode = '0'.charCodeAt(0);
for(let i = 0; i < str.length; i++){
    const digitValue = str.charCodeAt(i) - zeroCharCode;
    number = number * 10 + digitValue;
}
console.log(number);



