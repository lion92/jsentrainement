let number =["3", "2", "1", "7"];

let num=number.reduce(function(x,y){
   // console.log(x);
    console.log(y);
  //  console.log(Math.max(Number(x),Number(y)))
    return Math.max(Number(x),Number(y));
})
///console.log(num);