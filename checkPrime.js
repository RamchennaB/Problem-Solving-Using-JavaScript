class Solution {

    isPrime(n){
        
        //code here
        if(n<=1){
            return 0;
        }
        if(n === 2){
            return 1;
        }
        if(n % 2 === 0){
            return 0;
        }
        for(let i=3; i*i<=n; i+=2){
            if(n % i === 0){
                return 0;
            }
        }
        return 1;
}
