class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pair = {
            ")":"(",
            "]":"[",
            "}":"{",
        }
        const stack = []

        for (const b of s){
            if(pair[b]){
                const top = stack.pop()
                if(top !== pair[b]) return false
            }else{
                stack.push(b)
            }
        }
        return stack.length === 0
    }
}
