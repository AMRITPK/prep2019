var isValidAll = function(str) {
    //console.log("checking",str);
   let stack=[];
   for(let i=0;i<str.length;++i){
       let item=str[i];
       if(item=="("||item=="{"||item=="["){
          // if(stack[stack.length-1]==")")
           stack.push(item);
       }else{
           if(item==")"){
               if(stack[stack.length-1]=="("){
                   stack.pop();
                   
               }else{
                   return false;
               }
           }else if(item=="]"){
               if(stack[stack.length-1]=="["){
                   stack.pop();
                   
               }else{
                return false;
               }
           }else if(item=="}"){
               if(stack[stack.length-1]=="{"){
                   stack.pop();
                   
               }else{
                     return false;
               }
           }
           
       }
   }
   if(!stack){
       return true;
       
   }if(stack.length==0){
       return true;
   }
   return false;
};

function isValid(str){
    console.log("checking",str);
    let stack=[];
    for(let i=0;i<str.length;++i){
        let item=str[i];
        if(item=="("||item=="{"||item=="]"){
           // if(stack[stack.length-1]==")")
            stack.push(item);
        }else{
            if(item==")"){
                if(stack[stack.length-1]=="("){
                    stack.pop();
                    
                }else{
                    stack.push(item);
                }
            }else if(item=="]"){
                if(stack[stack.length-1]=="["){
                    stack.pop();
                    
                }else{
                    stack.push(item);
                }
            }else if(item=="}"){
                if(stack[stack.length-1]=="["){
                    stack.pop();
                    
                }else{
                    stack.push(item);
                }
            }
            
        }
    }
    if(!stack){
        return true;
        
    }if(stack.length==0){
        return true;
    }
    if(stack.indexOf(")")>-1){
        return false;
    }
    if(stack.indexOf("]")>-1){
        return false;
    }
    if(stack.indexOf("}")>-1){
        return false;
    }
    return true;
}


console.log(isValidAll("[][]{}"));