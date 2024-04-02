/*Determine If a String Is a Pangram (Contains Every Letter of the Alphabet)
Given a string str, return true if str is a pangram (contains every letter of the alphabet), otherwise return false.
Input: str = "The quick brown fox jumps over the lazy dog"
Output: true*/

let str = "The quick brown fox jumps over the lazy dog"
let letters = new Set()
for(let char of str.toLowerCase()){
    if(/[a-z]/.test(char)){
        letters.add(char)
    }
}
const isPangram = letters.size === 26
console.log(isPangram)

