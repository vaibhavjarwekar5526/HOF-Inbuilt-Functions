var arr = [3, 7, 8, 6, 5, 9, 12];


const divBy3 = el => el%3===0;

const cube = el => el**3;

const sum = (prev, curr) => prev+curr;

var array3MultiplesCubesSum = arr.filter(divBy3).map(cube).reduce(sum,0);

console.log(array3MultiplesCubesSum)