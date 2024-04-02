function medianArr(arr){
    arr.sort((a,b)=>a-b);
    const median = Math.floor(arr.length / 2);
    if(arr.length % 2 === 0){
        return(arr[median-1] + arr[median])/ 2;
    }else{
        return arr[median];
    }
}    
const arr = [5, 2, 8, 12, 3];
console.log(medianArr(arr));