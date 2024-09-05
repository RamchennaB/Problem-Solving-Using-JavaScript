function fact(n){
    if(n == 0){
        return 1;
    }
    else if(n == 1){
        return 1;
    }
    else{
        return  n* fact(n-1);
    }
}
console.log(fact(6));
