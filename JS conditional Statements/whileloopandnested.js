/* While Loop + Nested If Statement
Print all numbers from 1 to n using a while loop and check if each number is even or odd using a nested if statement.*/

let n = 6;
let i = 1;
while(i <= n){
    if(i % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    i++;
}    
