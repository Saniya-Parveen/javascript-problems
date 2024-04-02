// Problem 15: Butterfly Pattern
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5;
for(let i = 1; i <=n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        rows  += '*';
    }
    for(let k = 1; k <= 2 * (n-i); k++){
        rows += ' ';
    }
    for(let l = 1; l <= i; l++){
        rows += '*';
    }
    console.log(rows);
}
for(let i = n; i >= 1; i--){
    let rows = '';
    for(let j = 1; j <= i; j++){
        rows  += '*';
    }
    for(let k = 1; k <= 2 * (n-i); k++){
        rows += ' ';
    }
    for(let l = 1; l <= i; l++){
        rows += '*';
    }
    console.log(rows);
}
