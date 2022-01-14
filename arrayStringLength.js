//Array String Length (HOF)

var strings = ["Vaibhav", "Prashant", "Saurabh", "Chetan", "Ketan"];

var length = el => el.length;

var lengthArray = strings.map(length);

console.log(lengthArray);