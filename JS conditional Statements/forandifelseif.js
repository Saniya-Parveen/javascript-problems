/* Problem 15: For Loop + If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using an if-else-if statement.*/

let n = 4;
for(let i = 1; i <= n ; i++){
    if(i > 0){
        console.log("positive");
    }
    else if(i < 0){
        console.log("negetive");
    }else{
        console.log("zero");
    }
}
