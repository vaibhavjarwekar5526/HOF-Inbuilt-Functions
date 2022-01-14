var string = ["aba", "abc", "bbb", "adda", "aeeca", "ccc", "dd"];

var a_start_end = el => {
    if(el[0]==="a" && el[el.length-1]==="a"){
        return el
    }
}

var matched = string.filter(a_start_end);

console.log(matched);