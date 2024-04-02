// Problem 9: Square Pattern
// *****
// *****
// *****
// *****
// *****

let n = 5;
for(let i = n; i >= 1; i--){
    let row = '';
    for(let j = n; j >= 1; j--){
        row += '*';
    }
    console.log(row);
}