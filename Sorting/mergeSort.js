function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const middle=Math.floor(arr.length / 2);
    
    let left=[];
    let right=[];
    for(let i=0;i<middle;i++){
        left.push(arr[i]);
    }
    for(let i=middle;i<arr.length;i++){
        right.push(arr[i]);
    }
    
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    
    const resultArray=[];
    let leftIndex=0;
    let rightIndex=0;
    
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    while(leftIndex <left.length){
        resultArray.push(left[leftIndex]);
        leftIndex++;
    }
    
    while(rightIndex < right.length){
        resultArray.push(right[rightIndex]);
        rightIndex++;
    }
    
    return resultArray;
}
const arr=[2,3,1,5,4];
let res=mergeSort(arr);
console.log(res);
