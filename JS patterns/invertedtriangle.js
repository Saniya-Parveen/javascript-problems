// Problem 7: Inverted Right Triangle Pattern
// *****
// **** 
// ***  
// **   
// *    

let n = 5;
for(let i = n; i >= 1; i--){
    let rows = '';
    for(let j = n; j > i; j--){
        rows += '*';
    }
    console.log(rows);
}

