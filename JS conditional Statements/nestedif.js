/* Nested If Statement
Check if a given number n is even or odd. If n is even, check if it is positive or negative. Print the corresponding message.
Example.*/

let n = 4;
if(n % 2 === 0){
    console.log("Even");
    if(n >= 0){
        console.log("positive");
    }else{
        console.log("negetive");
    }
}else{
    console.log("Odd");
}
