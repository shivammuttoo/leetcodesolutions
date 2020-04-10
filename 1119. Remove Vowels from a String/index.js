/**
 * Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    return S.replace(/[aeiou]/ig,'');
};
console.log(removeVowels("leetcodeisacommunityforcoders"));