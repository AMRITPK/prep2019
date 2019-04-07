function max(...items){
    //console.log(items);
    refined=[];
   for (index in items){
       refined[index]=(items[index])?items[index]:0;
   }
    return Math.max(...refined);
}    
function longestsubseqdp(str1,str2,len1,len2,mem){
 let resSet=new Set();
    mem=[];
    let res=0;
    for (let index1 in str1){
        for (let index2 in str2){
            //console.log(mem);
            if(!mem[index1]) mem[index1]=[];
            if(!mem[-1]) mem[-1]=[];
            if(!mem[index1][index2]) mem[index1][index2]=[];

            if(str1[index1]==str2[index2]){
                mem[index1][index2]=max(mem[index1-1][index2],mem[index1][index2-1],mem[index1-1][index2-1] ) +1;
                resSet.add(str1[index1]);
                if(typeof(mem[index1][index2]) !='number')mem[index1][index2]=0;
                if(mem[index1][index2]){
                    res=max(res,mem[index1][index2]);
                    //console.log(res);
                   
                }
            }else{
                mem[index1][index2]=max(mem[index1-1][index2],mem[index1][index2-1],mem[index1-1][index2-1] );
                if(typeof(mem[index1][index2]) !='number')mem[index1][index2]=0;
                if(mem[index1][index2]){
                    res=max(res,mem[index1][index2]);
                   // console.log(res);
                }
            }
        }
       
    }
    console.log(mem,resSet);
    return res;
 }

function longestsubseq(str1,str2,len1,len2,map){

   if(len1==0||len2==0)return 0;
   
   if(str1.charAt(len1-1)==str2.charAt(len2-1)){
       return 1+ longestsubseq(str1,str2,len1-1,len2-1,map);
   }
   else {
       if(!map.get(len1+""+len2-1)){
        map.set(len1+""+len2-1,longestsubseq(str1,str2,len1,len2-1,map));  
       }else{
           //console.log("mem1");
       }
       if(!map.get(len1-1+''+len2)){
        map.set(len1-1+""+len2,longestsubseq(str1,str2,len1-1,len2,map));
       }else{
       // console.log("mem2");
    }
      // if(res[len1-1+''+len2]&&res[len1+''+len2-1]){
       //    console.log("in mem");
        return Math.max(map.get(len1+""+len2-1), map.get(len1-1+''+len2,map));
    //   / }
    
}

}

let str1="amritpresannakumar";
let str2="abcdefghijklmnopqr";
//str1= "ABCBDAB", str2 = "BDCABA";
//str1= "AMRIT", str2 = "ABMDT";
let mem=new Map();
 res=longestsubseqdp(str1,str2,str1.length,str2.length,mem);
console.log("res dp"+res);


 res=longestsubseq(str1,str2,str1.length,str2.length,mem);
console.log("res mem"+res);
