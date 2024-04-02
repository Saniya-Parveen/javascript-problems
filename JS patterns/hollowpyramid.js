// Problem 2: Hollow Pyramid Pattern
//     *    
//    * *   
//   *   *  
//  *     * 
// *********

function printHollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k === 1 || k === 2 * i - 1 || i === n) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}


const height = 5;
printHollowPyramid(height);
