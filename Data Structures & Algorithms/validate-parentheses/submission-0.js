class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj = { ')' : '(', '}' : '{', ']' : '['};
        const stack = [];
        for (let item of s) {
            if (obj[item]) {
                if (stack.length > 0 && 
                stack[stack.length - 1] === obj[item]) {
                    stack.pop();
                } else return false;
            } else {
                stack.push(item);
            }
        }
        return stack.length === 0;
    }
}
