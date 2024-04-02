/*  For Loop + Nested If Statement
Print all numbers from 1 to n using a for loop and check if each number is even or odd using a nested if statement.*/

let n = 10;
let i = 1;
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
       console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
