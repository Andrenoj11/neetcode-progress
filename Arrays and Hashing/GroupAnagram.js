class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const map = new Map(); // key -> array of strings

//   for (const s of strs) {
//     // 1) build frequency signature
//     const freq = new Array(26).fill(0);

//     for (let i = 0; i < s.length; i++) {
//       const idx = s.charCodeAt(i) - 97; // 'a' = 97
//       freq[idx]++;
//     }

//     // 2) convert freq array into a stable string key
//     // use delimiter to avoid ambiguity (e.g., [1,11] vs [11,1] etc.)
//     const key = freq.join("#");

//     // 3) push into hashmap bucket
//     if (!map.has(key)) map.set(key, []);
//     map.get(key).push(s);
//   }

//   // 4) return all grouped arrays
//   return Array.from(map.values());
 const res = {}

    for (const s of strs){
        let count = Array(26).fill(0)
        for (const c of s){
          count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
        }
        if(!res[count]) res[count] = []
        res[count].push(s)
    }
    return Object.values(res)
    }
}
