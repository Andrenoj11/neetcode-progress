class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b); // ✅ numeric sort

    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
      const a = nums[i];

      // skip duplicate a
      if (i > 0 && a === nums[i - 1]) continue;

      // early break
      if (a > 0) break;

      let l = i + 1;
      let r = n - 1;

      while (l < r) {
        const sum = a + nums[l] + nums[r];

        if (sum < 0) {
          l++;
        } else if (sum > 0) {
          r--;
        } else {
          res.push([a, nums[l], nums[r]]);
          l++;
          r--;

          // skip duplicates on l
          while (l < r && nums[l] === nums[l - 1]) l++;
          // skip duplicates on r
          while (l < r && nums[r] === nums[r + 1]) r--;
        }
      }
    }

    return res;
  }
}