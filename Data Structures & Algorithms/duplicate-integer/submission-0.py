class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        stack = []
        for n in nums:
            if n not in stack:
                stack.append(n)
            else:
                return True
        if stack == nums:
            return False
           
                