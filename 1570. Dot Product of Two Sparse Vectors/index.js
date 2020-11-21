/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
let nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
var SparseVector = function(nums) {
    this.nums = nums;
    // return this;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
   console.log(vec, this);
   let sum = 0;
    this.nums.map((elem, index)=> {
        sum += (elem * vec.nums[index])
        return sum;
    })
};
 let v1 = new SparseVector(nums1);
 let v2 = new SparseVector(nums2);
 console.log(v1.dotProduct(v2));
 v1.dotProduct(v2);

    
// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);