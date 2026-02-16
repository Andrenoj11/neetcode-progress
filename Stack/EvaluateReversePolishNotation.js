class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for (const t of tokens){
            if(t === '+'){
                stack.push(stack.pop() + stack.pop())
            }else if(t === "-"){
                const a = stack.pop()
                const b= stack.pop()
                stack.push(b-a)
            }else if(t === "*"){
                stack.push(stack.pop() * stack.pop())

            }else if(t === "/"){
                const a = stack.pop()
                const b= stack.pop()
                stack.push(Math.trunc(b/a))
            }else {
                stack.push(Number(t))
            }
            
        }
        return stack[0]
       
    }
}
