class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const map = new Map()
       const output = []

       for (const n of nums){
        map.set(n, (map.get(n) ?? 0) + 1)
       }

       const buckets = Array.from({length: nums.length + 1}, ()=>[])
       for(const [key, value] of map.entries()){
        buckets[value].push(key)
       }

       for(let i = buckets.length -1; i >0 && output.length < k; i--){
           for(const b of buckets[i]){
                output.push(b)
                if(output.length === k) return output
           }
            

       }
       return output
    }
}
