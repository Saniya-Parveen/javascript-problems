// Problem 6: Hollow Right Triangle Pattern
// *        
// **       
// * *      
// *  *     
// *****

let n = 5;
for(let i = 1; i <= n; i++){
    let row = '';
    for(let j = 1; j <=n; j++){
        if(j === i || i === n || j ===1){
            row += '*';
        }else{
            row += ' ';
        }
        
    }
    console.log(row);
}