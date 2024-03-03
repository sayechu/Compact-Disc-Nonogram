let minNum = 0;
let maxNum = 10;

let num = Math.floor(Math.random() * (maxNum-minNum) + minNum) * 1000;
//console.log(num);

setTimeout(() => { window.open("https://www.w3schools.com"); }, num);