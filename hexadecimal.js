const n = parseInt(readline());
let hexString = n.toString(16);
hexString=hexString.toUpperCase().replace(new RegExp("0","g"), "O")
console.log(hexString);