/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var lefttMap = {
    '(':1,
     '{':2,
      '[':3
    }
    var rightMap = {
    ')':1,
     '}':2,
      ']':3
    }
    var stack = [];
    for(var i=0; i<s.length; i++){
        if(lefttMap[s[i]]){
            stack.push(s[i])
        }else if (!stack.length || rightMap[s[i]] != lefttMap[stack.pop()]){
    return false
    }
        
        
    }
    return stack.length ? false : true
    
   
    
};