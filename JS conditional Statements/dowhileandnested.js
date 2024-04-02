/*Do While Loop + Nested If Statement
Print all numbers from 1 to n using a do while loop and check if each number is even or odd using a nested if statement.*/

let n = 10;
let i = 1;
do{
    if(i % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
    i++;
}while(i <= n);


