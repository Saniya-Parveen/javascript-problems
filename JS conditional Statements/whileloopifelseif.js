/* While Loop + If-Else-If Statement
Print all numbers from 1 to n using a while loop and check if each number is positive, negative, or zero using an if-else-if statement.*/

let n = 5;
let i = 1;
while(i <= n){
    if(i > 0){
        console.log("positive");
    }
    else if(i === 0){
        console.log("zero");
    }
    else{
        console.log("negetive");
    }
    i++;
}
