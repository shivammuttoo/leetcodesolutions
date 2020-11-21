/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle; 
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for(let i= row1; i <= row2; i++){
        for(let j = col1; j<=col2; j++){
            this.rectangle[i][j] = newValue;            
        }
    }
    console.log(this.rectangle);
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.rectangle[row][col];
};

//  Your SubrectangleQueries object will be instantiated and called as such:
let rectangle = [[1,2,1],[4,3,4],[3,2,1],[1,1,1]];
 var obj = new SubrectangleQueries(rectangle)
 obj.updateSubrectangle(0, 0, 3, 2, 5)
 var param_2 = obj.getValue(0,0)
 console.log(param_2);
 rectangle = [[1,2,1],[4,3,4],[3,2,1],[1,1,1]];
 var obj = new SubrectangleQueries(rectangle)
 obj.updateSubrectangle(0, 0, 2, 2, 100)
 param_2 = obj.getValue(0,0)
 console.log(param_2);
 param_2 = obj.getValue(2,2)
 console.log(param_2);
 obj.updateSubrectangle(1, 1, 2, 2, 20)
 param_2 = obj.getValue(2,2)
 console.log(param_2);