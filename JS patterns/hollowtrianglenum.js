// Problem 20: Hollow Triangle Pattern
// 1
// 2 2
// 3   3
// 4     4
// 5       5

let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i ){
            rows += i;
        }else{
            rows += ' ';
        }
    }
    console.log(rows)
}