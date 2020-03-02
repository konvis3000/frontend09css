
// let tag = prompt("Data", "h2");
// let regexp = new RegExp(`<${tag}>`);

// let str= "12-34-56";
// let result = str.split(/-\s*/);

// console.log(result);


// let str= "I Love Java Script";
// let result = /love/i.test(str);

// console.log(result);


// let str= "12-34-56";
// let result = str.replace(/-/g,":");

// console.log(result);


// let str= "+38(050)-280-17-04";
// let regexp=/[0-5]/g;
// let result = str.match(regexp);

// console.log(result);


let str= "На работу в 8:30, с работы 18-00";
let regexp=/\d\d[-:]\d\d/g;
let result = str.match(regexp);

console.log(result.join(""));