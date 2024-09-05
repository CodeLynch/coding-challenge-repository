


function getLongestSub(nums:number[]): number{
    
    let countArr: number[] = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] <  nums[i] && countArr[i] == countArr[j])
                countArr[i] = countArr[i] + 1;
        }
    }
    return Math.max.apply(Math,countArr);
}

//test input here
let inputArr = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(getLongestSub(inputArr));