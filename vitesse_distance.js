const N = 2;
let result=1000000000000;
let str=["25 4", "25 15"]
for (let i = 0; i < N; i++) {
    var inputs = str[i].split(' ');
    const S = parseInt(inputs[0]);
    const D = parseInt(inputs[1]);
  (Math.round((D/S)*60)<result)?result=Math.round((D/S)*60):null;

}
console.log(result);
