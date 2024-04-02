// function printPyPrint a pyramid pattern of stars (*) with a height of n.
// Example:
// For n = 5:
//     *    
//    ***   
//   *****  
//  ******* 
// *********
function printPyramid(n){
    for(let i = 1; i <= n; i++ ){
        let row = '';
        for(let j = 1; j <= n-i; j++){
            row += ' ';
        }
        for(let k = 1; k <= 2 * i-1; k++){
            row += '*';
        }
        console.log(row);
    }
}
const height = 5;
printPyramid(height);