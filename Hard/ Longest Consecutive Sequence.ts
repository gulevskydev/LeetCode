function longestConsecutive(nums: number[]): number {
    if(!nums.length) return 0
    nums = [...new Set(nums)].sort((a,b) => a - b)
    let ans = 0
    let max = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - 1 === nums[i-1]) ans++
        else {
            max = Math.max(max,ans)
            ans = 0
        } 
    }
    return Math.max(max,ans) + 1
};