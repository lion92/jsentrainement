let input="ubutatatau";
let str="uaeio";
let str2=input;

for(let letter of str){
console.log(letter);
  //str2=str2.replace(new RegExp(letter,"g"), "ub"+letter);
str2=str2.split(letter).join("ub"+letter);
}
console.log(str2);