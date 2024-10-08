class Solution {
    
    nthFibonacci(n)
    {
        //prestoring
        const mod = 1e9+7;
        let dp = [];
        //initializing dp[0] as 0
        dp[0]=0;
        //initializing dp[1] as 1
        dp[1]=1;
        for(let i=2;i<=n;i++){
            //as same as fibonacci formula f(i)=f(i-1)+f(i-2)
            dp[i]=(dp[i-1]%mod + dp[i-2]%mod)%mod;
        }
        //returning nth value
        return dp[n];
    }
}
