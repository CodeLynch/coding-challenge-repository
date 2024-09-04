function isPalindrome(str: string): Boolean{
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

function getPairs(wordlist:string[]): number[][]{
    let pairsArr:number[][] = [];
    for(let i = 0; i < wordlist.length; i++){
        let wordA:string = wordlist[i];
        for(let j = 0; j < wordlist.length; j++){
            let wordB:string = "";
            if(i != j){
                wordB = wordlist[j];
                if(isPalindrome(wordA.concat(wordB))){
                    pairsArr[pairsArr.length] = [i, j];
                }
            }
        }
    }
    return pairsArr;
}

//test a word list here
let input = ["bat","tab", "cat"];
console.log(getPairs(input));