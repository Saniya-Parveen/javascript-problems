/* Problem 14: For Loop + If-Else Statement
Print all numbers from 1 to n using a for loop and check if each number is even or odd using an if-else statement.*/
let n = 10;
for(let i = 1; i <= n; i++){
    if(i % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
