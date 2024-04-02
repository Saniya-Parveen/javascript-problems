/*  While Loop + If-Else Statement
Print all numbers from 1 to n using a while loop and check if each number is even or odd using an if-else statement.*/

let n = 5;
let i = 1;
while(i <= n){
    if(i % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
    i++;
}
