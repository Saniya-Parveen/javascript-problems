/* For Loop + Nested If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using nested if-else-if statements.*/

let n = 5;
for(let i = 1; i <= n; i++){
    if(i > 0){
        console.log("positive");
    }
    else if(i === 0){
        console.log("zero");
    }
    else{
        console.log("negetive");
    }
}
