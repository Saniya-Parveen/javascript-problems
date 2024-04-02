// Problem 10: Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

let n = 5;
for( let i = n; i >= 1; i--){
    let row = '';
    for(let j = n; j >= 1; j--){
        if(i === n || i === 1 || j === n || j === 1){
            row += '*';
        }else{
            row += ' ';
        }
    }
    console.log(row);
}