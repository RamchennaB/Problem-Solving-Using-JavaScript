function bubble(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
       for(let j=1;j<n-i;j++){
           if(arr[j-1] > arr[j]){
                 let temp=arr[j];
                 arr[j]=arr[j-1];
                 arr[j-1]=temp;
           }
       }
    }
}
function print(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        console.log(arr[i]  + " ");
        
    }
}
const arr=[6,5,4,3,2,1];
bubble(arr);
print(arr);
