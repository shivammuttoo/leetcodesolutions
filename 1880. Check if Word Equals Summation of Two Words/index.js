/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let obj = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9}
    
     var convertedFirstWord = convertWord(firstWord);   
     var convertedSecondWord = convertWord(secondWord);
     var convertedTargetWord = convertWord(targetWord);
     return convertedFirstWord + convertedSecondWord == convertedTargetWord;
     function convertWord(word){
         var convertedWord =  word.split('').map((a) => obj[a]); 
         return parseInt(convertedWord.join(''));
     }  
     
 };
 