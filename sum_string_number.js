const x = "1 12 1234 1245";
let tab = x.split(" ");
let result = 1;
console.log(tab);
tab.forEach((element) => {
  let x = element.split("");
  result *= x.reduce((a, b) => {
    return Number(a) + Number(b);
  });
});

console.log(result);