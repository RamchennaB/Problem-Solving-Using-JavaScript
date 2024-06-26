function countcard(n){
    let ans=0;
    let level=1;
    while(level <= n){
        ans+=(level*3);
        level+=1;
    }
    return(ans-=n);
}
let n=prompt('enter the level of cards you want to construct');
console.log(countcard(n));
