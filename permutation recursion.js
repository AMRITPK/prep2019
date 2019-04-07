console.log("asdasdfasdff");

var arr=['a','b','c'];
var out=new Array(3);
aux(arr,3,out);
function aux(arr,len,out){
  
  if(len==0){
   console.log("result======"+out.join(","));
    return;
  }
for (var i=0;i<arr.length;++i){

   out[arr.length-len]=arr[i];
  if(isvalid(out,len)){
    
 	 aux(arr,len-1,out);
    
    
  }
  
 
  
}

  
}

function isvalid(arr,len){
  
  return true;
  var s={};
  
  var actr=0;var bctr=0;var cctr=0;
    for (var c in arr){
   //console.log(arr+"--------"+len+"----"+c);
    if([arr[c]]=='a')
    { actr+=1;
    }
   	 if([arr[c]]=='b')
    { bctr+=1;
    }
       if([arr[c]]=='c')
    { cctr+=1;
    }
  
      
    }
    console.log("-->"+actr+"-"+bctr+"-"+cctr);
  if(actr>1||bctr>1||cctr>1)
    return false;
    else
 	return true; 
}


