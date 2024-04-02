/*Check If Two Strings Are Anagrams
Given two strings str1 and str2, return true if str1 is an anagram of str2, otherwise return false.*/

let str1 = "silent";
let str2 = "listen";
let areAnagrams = true;
if(str1.length !== str2.length){
    areAnagrams = false;
}else{
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    areAnagrams = sortedStr1 === sortedStr2;
}
console.log(areAnagrams);
