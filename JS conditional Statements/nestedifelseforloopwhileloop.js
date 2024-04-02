/* Nested If-Else + For Loop + While Loop
Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, print "FizzBuzz".*/

let n = 20;
let i = 1;
for(let i = 1; i <= n; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 == 0){
        console.log("fizz");
    }
    else if(i % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}
