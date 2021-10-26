let tab=[];
let tab1=["1 n", "1 o", "2 b"];
str="";
for(let i of tab1){
    tab.push({"id":parseInt(i.split(" ")[0],10), "str":i.split(" ")[1] })
}

for(let i=0; i<tab.length;i++){
    console.log(tab[i].id)
    tab.forEach(element => {
        console.log(i, element.id, tab.length)
     if(element.id===(i+1)){
         str+=element.str;
     }  
   });
}
console.log(str);