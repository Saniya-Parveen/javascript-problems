// Problem 17: Zigzag Pattern
// *        *
//  *      * 
//   *    *  
//    *  *   
//     **    

let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        rows += ' ';
    }
    rows += '*';
    for(let k = 1; k <= 2 * (n - i) - 1; k++){
        rows += ' ';
    }
    if(i !== n){
        rows += '*';
    }
    console.log(rows);
}