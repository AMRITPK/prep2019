var isUnique=function(n){
       
          
    let tempmap=new Map();
    while (n>0){
        let currChar=n%10;
        n=Math.floor(n/10);
   // for(let i=0;i<str.length;++i){
        if(!tempmap.get(currChar)){

            tempmap.set(currChar,1);
        }else{
           return false;
        }
    }


return true;
}
var countNumbersWithUniqueDigits = function(n) {
let counter=0;
for(let i=0;i<Math.pow(10,n);++i){
if(isUnique(i))   
    counter++;
}
return counter;
};
function str(item){
    //console.log("aaaaaaaaa",item);
    return item+"";
}
function comp(){
    let res=new Set();
   let arr= [11,22,33,44,55,66,77,88,99];

   for(let i=0;i<9;++i){
        for(let j=0;j<=9;++j){
            res.add(i+""+arr[j]);
            res.add(arr[j]+""+i);
            res.add(str(arr[j]).charAt(1)+""+i+""+str(arr[j]).charAt(0));
        }
   }
   return res;
}

console.log(comp());