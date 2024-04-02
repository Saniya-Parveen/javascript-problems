// Problem 19: Triangle Pattern
// 1
// 12
// 123
// 1234
// 12345

let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        rows += j;
    }
    console.log(rows);
}