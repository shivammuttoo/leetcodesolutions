/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let max = 0;
    let maxElem=nums[0];
    nums.forEach(( elem )=>{
        if(obj.hasOwnProperty(elem)){
            obj[elem]++;
            if(obj[elem] > max){ max = obj[elem]; maxElem = elem}
        }else{
            obj[elem] = 1;
        }
    })
    return maxElem
};
var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};
majorityElement([2,2,1,1,1,2,2]);