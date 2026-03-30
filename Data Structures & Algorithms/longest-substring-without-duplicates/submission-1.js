class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let res = 0, l = 0
           
        for (let i = 0; i<s.length;i++) {

            if (map.has(s[i])) {
                l = Math.max(map.get(s[i]) + 1, l)
            }
            map.set(s[i],i)
            res = Math.max(res, i - l + 1)
            
        }
        return res
    }
}
