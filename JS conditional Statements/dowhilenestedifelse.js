/* Do While Loop + Nested If-Else Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using nested if-else statements.*/

let n = 5;
let i = 1;
do{
    if(i > 0){
        console.log("positive");
    }
    else if(i === 0){
        console.log("zero");
    }else{
        console.log("negetive");
    }
    i++;
}while(i <= n);
