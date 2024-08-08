const str="Hey I love Javascript";
const vowels=['a','e','i','o','u'];

function countVowels(data){
    let count=0;
    data.toLowerCase().split("").forEach((ch) =>{
        vowels.includes(ch) && count++;
    });
    return count;
}
const numofvowels = countVowels(str);
console.log(numofvowels);
