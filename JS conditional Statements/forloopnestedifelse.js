/* For Loop + Nested If-Else Statement
Print all numbers from -n to n using a for loop and check if each number is positive, negative, or zero using nested if-else statements.*/
let n = 6;
for(let i = -1;i <= n; i++){
    if(i > 0){
        console.log("positive");
    }
    else if(i < 0){
        console.log("negetive");
    }else{
        console.log("zero");
    }
}
