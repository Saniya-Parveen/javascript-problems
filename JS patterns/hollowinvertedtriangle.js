// Problem 8: Hollow Inverted Right Triangle Pattern
// *****
// *   *
// *  *
// * * 
// *    

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === i || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
