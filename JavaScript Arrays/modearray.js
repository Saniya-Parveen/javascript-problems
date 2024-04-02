function modeArr(arr){
    let modeArray = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==arr[i+1]){
            modeArray = arr[i];
            i += 1;
        }else{
            i += 1;
        }
        
    }
}
const arr = [5, 2, 3, 12, 8];
console.log(modeArr(arr));