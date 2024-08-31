function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    
    let pivot=arr[Math.floor(arr.length / 2)];
    let left=[];
    let right=[];
    let middle=[];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else if(arr[i] > pivot){
            right.push(arr[i]);
        }
        else{
            middle.push(arr[i]);
        }
    }
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
const arr=[2,3,1,5,4];
let res=quickSort(arr);
console.log(res);
