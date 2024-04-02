// Problem 5: Right Triangle Pattern
// *        
// **       
// ***      
// ****     
// *****

let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= i; j++){
        rows += '*';
        
    }
    console.log(rows);
}

