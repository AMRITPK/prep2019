

var arr=['a','b','c'];
var out=new Array(3);


aux(arr,3,out);
function aux(arr,depth,out){
  
  if(depth==0){
   console.log(out.join(","));
     out=new Array(3);
    
    return;
  }
for (let i=0;i<arr.length;++i){

  	out[arr.length-depth]=arr[i];


  if(isvalid(out,depth))
  	aux(arr,depth-1,out);
 
}
}

function isvalid(out1,depth){


  
  var s=[];
  for (var c=0;c<=out1.length-depth;++c){
    
    //console.log(c);
    if(s[out1[c]]==true)
      return false;
  
   	else
      s[out1[c]]=true;
    
  }
  
 return true; 
}


