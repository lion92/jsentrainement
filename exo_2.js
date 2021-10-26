let num = 0;
const s = "88811116699";
for (let i of s) {
    i === "0" || i === "9" || i === "6"?++num: null;
    i === "8"?(num=num+2): null;
}
console.log(num);