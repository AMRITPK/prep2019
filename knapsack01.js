
let max=130;
let vals=[10,20,60,70,100];
let res="";

function knapWithoutrep(max,vals,depth,res){
    //console.log(max,vals,depth);
    if (max==vals[depth]){
        console.log("ret 1",depth,max,res);
        return {val:1,res:res+"-"+vals[depth]};
    }
    if(depth==vals.length-1){

            return {val:99999,res:" "};

    }
    let yesconditionRET=knapWithoutrep(max-vals[depth],vals,depth+1,res);
    let noconditionRET=knapWithoutrep(max,vals,depth+1,res);
    if(yesconditionRET.val < noconditionRET.val){      

        return {val:yesconditionRET.val+1,res:yesconditionRET.res+"-"+vals[depth]};
    }else{

        return {val:noconditionRET.val,res:noconditionRET.res};
    }


 
}

console.log( max,knapWithoutrep(max,vals,0,res));