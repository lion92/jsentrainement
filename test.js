str =" 1 2 -3 5 ";

str= str.replace(new RegExp(" "+ '$'), 'finish');

let index = 3;
str=  str.substring(0, index) + "X" + str.substring(index + 1);
console.log(str)
let tab=str.split(" ");
let str2="";
console.log(tab.reduce((a,b)=>{
    str2+=Math.max(Number(a), Number(b))+" ";
    console.log("te"+Math.max(Number(a), Number(b)))
    return Math.max(Number(a), Number(b))
}))

console.log(str2);