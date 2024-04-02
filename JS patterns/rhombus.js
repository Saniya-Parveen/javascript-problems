// Problem 11: Rhombus Pattern
//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *    

let n = 5;
for(let i = 1; i <= n; i++){
    let rows = '';
    for(let j = 1; j <= n-i; j++){
        rows += ' ';
    }
    for(let k = 1; k <= 2*i-1; k++){
        rows += '*';

    }
    console.log(rows);
    
}
for(let i = n-1; i >= 1; i--){
    let rows = '';
    for(let j = 1; j <= n-i; j++){
        rows += ' ';
    }
    for(let k = 1; k <= 2*i-1; k++){
        rows += '*';

    }
    console.log(rows)
    
}

