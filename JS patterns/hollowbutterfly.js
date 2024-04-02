// Problem 16: Hollow Butterfly Pattern
// *        *
// **      **
// * *    * *
// *  *  *  *
// *   **   *
// *   **   *
// *  *  *  *
// * *    * *
// **      **
// *        *
let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i){
            rows += '*';
        }else{
            rows += ' '
        }
        
    }
    for(let j = 1; j <= 2 * (n-i); j++){
       rows += ' '
    }
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i){
            rows += '*';
        }else{
            rows += ' ';
        }
        
    }
    console.log(rows);
}
for(let i = n-1; i >= 1; i--){
    let rows = '';
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i){
            rows += '*';
        }else{
            rows += ' '
        }
        
    }
    for(let j = 1; j <= 2 * (n-i); j++){
       rows += ' '
    }
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i){
            rows += '*';
        }else{
            rows += ' ';
        }
        
    }
    console.log(rows);
}