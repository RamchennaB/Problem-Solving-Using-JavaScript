function insertion(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
}
function print(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        console.log(arr[i]  + " ");
        
    }
}
const arr=[6,5,4,3,2,1];
insertion(arr);
print(arr);
