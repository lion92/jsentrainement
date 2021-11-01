const n = parseInt(readline());
let tab=(""+n).split("");
let num=tab.reduce((a,b)=>{
    return Number(a)+ Number(b);
})
n%num===0?console.log("true"):console.log("false");
//sommes des chiffres 