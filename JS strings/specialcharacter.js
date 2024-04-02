let str = "hello!@#world";
let newStr = "";
for(let i = 0; i<str.length; i++){
    if(/[a-zA-Z0-9]/.test(str[i])){
        newStr += str[i];
    }
}
console.log(newStr);