class Solution{
    static int isFactorial(int N) {
        //code here
        if(N == 0 || N ==1){
            return 1;
        }
        int factorial=1;
        int n=1;
        
        while(factorial < N){
            n++;
            factorial*=n;
        }
        if(factorial == N){
            return 1;
        }else{
            return 0;
        }
    }
}
