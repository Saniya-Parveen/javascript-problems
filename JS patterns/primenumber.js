// Problem 23: Prime Numbers Pattern
// 2
// 3 3
// 5 5 5
// 7 7 7 7
// 11 11 11 11 11

let n = 5;
let primes = [];
let num = 2;
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

while (primes.length < n) {
    if (isPrime(num)) {
        primes.push(num);
    }
    num++;
}

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += primes[i] + ' ';
    }
    console.log(row);
}


