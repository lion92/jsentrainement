

const N = 2
let binary="";
for (let i = 0; i < N; i++) {
    const LINE = "--__-_";
    for(let j of LINE){
       
        j=="_"?binary+=0:j=="-"?binary+=1:null;
    }
    if(i!==N-1){
    binary+=" ";
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
function binaryAgent(str) {

var newBin = str.split(" ");
var binCode = [];

for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
return binCode.join("");
}
console.log(binaryAgent(binary));
