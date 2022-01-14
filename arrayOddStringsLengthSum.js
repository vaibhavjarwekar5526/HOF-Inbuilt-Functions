var string = ["abc", "ab", "abcde", "abd", "abcd", "adda", "abbbcde"]

const odd = el => el.length%2!==0;

const sum = (prev,curr) => prev+curr.length;

var oddStringLengthSum = string.filter(odd).reduce(sum,0);

console.log(oddStringLengthSum);