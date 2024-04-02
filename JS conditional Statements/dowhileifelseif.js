/* Do While Loop + If-Else-If Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.*/

let n = 5;
let i = 1;
do{
    if(i > 0){
        console.log(i + "positive");
    }
    else if(i === 0){
        console.log(i + "zero");
    }
    else{
        console.log(i + "negetive");
    }
    i++;
}while(i <= n);
