// Problem 3: Inverted Pyramid Pattern
// *********
//  *******
//   *****
//    ***
//     *

function invertedPyramid(n){
    for(let i = n; i >= 1; i--){
        let row = '';
        for(let j = n; j > i; j-- ){
            row += ' ';
        }
        for(let k = 1; k <= 2*i-1; k++){
            row += '*';

        }
        console.log(row);

    }
}
const height = 5;
invertedPyramid(height);
