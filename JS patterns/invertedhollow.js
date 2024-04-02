// Problem 4: Hollow Inverted Pyramid Pattern
// *********
//  *     *
//   *   *
//    * *
//     *

function invertedHollowPyramid(n){
    for(let i = n; i >= 1; i--){
        let row = '';
        for(let j = n; j > i; j--){
            row += ' ';
        }
        for(let k=1; k <= 2*i-1; k++){
            if(k === 1 || k === 2*i-1 || i === n){
               row += '*'; 
            }else{
                row += ' ';
            }
        }
        console.log(row);

    }
}
const height = 5;
invertedHollowPyramid(height);


