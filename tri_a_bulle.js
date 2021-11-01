let number=["6", "7","1", "3", "5", "8","13"];

/*console.log(number.sort((a,b)=>{
return Number(a)-Number(b)
}))*/

for(let i=0; i<number.length-1; i++){
    for(let j=0; j<number.length-1-i; j++){
        console.log("ancien :"+number[j]);
        if(number[j]>number[j+1]){
            [number[j], number[j+1]]=[number[j+1], number[j]]
            console.log("nouveau"+number[j]);
        }
    } 
}
