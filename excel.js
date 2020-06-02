var convertToTitle = function(n) {
    console.log("in her");
   let temp="";
    let queue=[];
    queue.push("");
    let counter=0;
    while (queue.length){
        
        let prevItem=queue.shift();
        
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let i=0;i<str.length;++i){

                let temp=prevItem+str.charAt(i);
                queue.push(temp);
                counter+=1;
                //console.log(counter+"--"+n);
                if(counter==n){
                    console.log(temp);
                    return temp;
                }
            }
            
    }
  
};

convertToTitle(1000001);