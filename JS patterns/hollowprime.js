// Problem 24: Hollow Prime Numbers Pattern
// 2
// 3   3
// 5     5
// 7       7
// 11         11

let n = 5;
let prime = [];
let num = 2;
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
while(prime.length < n){
    if(isPrime(num)){
        prime.push(num);
    }
    num++;
}
for(let i = 0; i <= n; i++){
    let rows = '';
    for(let j = 0; j <= i; j++){
        if(j === 0 || j === i){
            rows += prime[i] + ' ';
        }else{
            rows += '  '
        }
    }
    console.log(rows);
}


