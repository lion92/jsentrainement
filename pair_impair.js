
const length = 10;
let result = 0;
let test = 0;
let test2 = 0
for (let i = 0; i < length; i++) {
    const number = parseInt(5);
    number % 2 === 0 ? (test = number * 3) : test2 = number * 5 ;
    
    result += (test + test2);
}
console.log(result);