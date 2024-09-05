class Solution {

    isPrime(n){
        
        //code here
        let res=true;
        if(n <=1){
            res=false;
        }
        for(let i=2;i<n-1;i++){
            if(n % i===0){
                res=false;
                break;
            }
        }
        if(res){
            return 1;
        }
        else{
            return 0;
        }
        
    }
}
