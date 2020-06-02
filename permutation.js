

var getPermutationAUX = function(item,depth,n, k,vals,counter) {
    //console.log(item,depth,n, k,vals);
    if(depth==n ){
        counter['val']+=1;
        if( counter['val']==k)
            return(vals.join(""));
        else
            return false;
        
    }
    for(let i=1;i<=n;++i){
        
        
        if(vals.indexOf(i)<0){ //if is valid
            let indexx=0;
            for(let x=0;x<n;++x){
                if(vals[x]==undefined ){
                    vals[x]=i;
                    indexx=x;
                    break;
                }
            }
            let ret=getPermutationAUX(i,depth+1,n,k,vals,counter);
            if(ret)
                return ret;
            vals[indexx]=undefined;
        }
       
        
    }
};

var getPermutation = function(n, k) {
    vals=[];
    counter={};
    counter['val']=0;
    return getPermutationAUX(0,0,n,k,vals,counter);
};

console.log(getPermutation(1,1));