// Problem 21: Fibonacci Pattern
// 1
// 1 1
// 1 1 2
// 1 1 2 3
// 1 1 2 3 5

let n = 5;
let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
    let row = '';
    let temp;
    for (let j = 1; j <= i; j++) {
        row += b + ' ';
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(row);
    a = 0;
    b = 1;
}
