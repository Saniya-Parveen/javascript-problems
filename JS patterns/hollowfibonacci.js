// Problem 22: Hollow Fibonacci Pattern
// 1
// 1 1
// 1   2
// 1     3
// 1       5

let n = 5;
let a = 0, b = 1;
for(let i = 1; i <= n; i++){
    let rows = '';
    let temp;
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i){
            rows += b + ' ';
           
        }else{
            rows += '  ';
        }
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(rows);
    a = 0;
    b = 1;
}
