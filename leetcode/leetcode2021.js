/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 编写一个函数来判断 t 是否是 s 的字母异位词
 */
var isAnagram = function(s, t) {
    if(s.split('').sort().join('') === t.split('').sort().join('') ) return true;
    return false;
}; console.log(isAnagram('anagram', 'nagaram'))