var strings = ["i", "am", "vaibhav", "bhaskar", "jarwekar"];

var snake_case = (curr, prev) => curr+"_"+prev;

var arrayStringSnakeCase = strings.reduce(snake_case);

console.log(arrayStringSnakeCase);