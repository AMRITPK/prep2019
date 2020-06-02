/**
 * @param {string} s
 * @return {number}
 */
var isPalin=function(set1,s){
    if(!set1 || set1.size<=1)
    return true;

    let tempRes="";
    set1.forEach(item=>{
        tempRes+s[item];
    });
    if(!tempRes || tempRes.length<=1)
        return true;

   
    let rev=tempRes.split().reverse().join("");
    return tempRes===rev;
}
var largestpalinsubseq=function(s,depth,doneSet,res){
    console.log("--------",depth,doneSet,res);
         if(isPalin(doneSet,s)){
            //console.log(tempRes);
              if(doneSet.size>res[0].length){
                    let tempRes="";
                    doneSet.forEach(item=>{
                        tempRes+s[item];
                    });
                    res[0]=tempRes;
                    //console.log(tempRes);
             }
        }
      
    
    for(let i=0;i<s.length;++i){
        let char=s[i];
        if(!doneSet.has(i)){
                doneSet.add(i);
                
                largestpalinsubseq(s,depth+1,doneSet,res);
                 doneSet.delete(i);
           
                
               // console.log("removed",tempRes.pop());
           
        }
   
    }
}
var removePalindromeSub = function(s) {
    
    let res=[""];
    largestpalinsubseq(s,0,new Set(),res);
    console.log("--res",res[0]);
};

removePalindromeSub("allay");