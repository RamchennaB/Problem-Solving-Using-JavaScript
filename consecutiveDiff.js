function consecutiveDiff(arr){
    const diffArr=[];
    for(let i=1;i<arr.length;i++){
        diffArr.push(arr[i] - arr[i-1]);
    }
    return diffArr;
}
const arr=[5,2,9,4,7];
console.log(consecutiveDiff(arr));
