

 function mineditdist(str1,str2){
    if(!str1||!str2||str1.length==0||str2.length==0){
        return str1.length||str2.length;
    }
    if(str1.charAt(0)==str2.charAt(0)){
        return 0+mineditdist(str1.substring(1),str2.substring(1));
    }else{
       // if(str1.length==1)return 1+str1.length;
        return 1+ Math.min(mineditdist(str1,str2.substring(1)),mineditdist(str1.substring(1),str2.substring(1),mineditdist(str1.substring(1),str2)));

    }  

}
function mineditdistdp(str1p,str2p){
    //if(str2p.length<str1p.length){
    //    console.log("str1 should be smaller");
    //    return false;
    //} 
    let str1=" "+str1p;
    let str2=" "+str2p;
    let arr=new Array();
    for(let i=0;i<str1.length;++i){
        if(!arr[i])arr[i]=new Array();
        str2.split("").forEach((item,index)=>{
            if(i==0){
                arr[i][index]=index;
            }else if(index==0){
                arr[i][index]=i;  
            }else{
               // if(i==2&&index==1){console.log(arr,str2.charAt(index),str1.charAt(index))};
                if(str2.charAt(index)==str1.charAt(i)){
                        arr[i][index]=arr[i-1][index-1];
                }else{  
                        
                        arr[i][index]=Math.min( arr[i-1][index] ,arr[i-1][index-1] ,arr[i][index-1])+1;
                }
            }
        
        })
    };
    //console.log(arr);
    return(arr[str1.length-1][str2.length-1]);

}

let str1="edit";
let str2="exert";
str1 = "sunday", str2 = "saturday";

console.log(mineditdist(str1,str2));
//console.log(str2.split("").splice(0,0,'-'));
console.log(mineditdistdp(str1,str2));

let assert =require ("assert");
assert.equal(mineditdistdp(str1,str2),mineditdist(str1,str2),function(succ,err){
    console.log("asdf",succ,err);
})

