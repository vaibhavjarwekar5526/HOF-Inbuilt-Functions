//Array Product (HOF)

var arr = [2, 3, 5, 7, 9];

const product = (prev,curr) => prev*curr;

var prod = arr.reduce(product);

console.log(prod);
