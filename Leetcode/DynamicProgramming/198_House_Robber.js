/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    const cacheRobRecord = {};
    
    var robNext = function(index) {
        if (index >= nums.length) return 0;

        let max = 0;
        for (let i = index + 2; i < nums.length; i++) {
            if (cacheRobRecord[i] == null) {
                cacheRobRecord[i] = robNext(i);
            }

            let result = cacheRobRecord[i]
            max = result > max ? result : max;
        }

        return nums[index] + max;
    }

    const f1 = robNext(0);
    const f2 = robNext(1);

    return f1 > f2 ? f1 : f2;
};