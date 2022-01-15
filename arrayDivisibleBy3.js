//Array Divisible By 3 (HOF)

var arr = [2, 3, 5, 7, 9];

const filter = el => el%3===0;

var divBy3 = arr.filter(filter);

console.log(divBy3);