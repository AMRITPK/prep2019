  //we know to insert[0] is greater..
        let doDelIndexes=new Set();
    
        for (let i=(prevIndex-1)?prevIndex-1:prevIndex;i<intervals.length;++i){
            console.log("in loop",i);
            let item=intervals[i];
             if(newInterval[1] < item[0]){
                 console.log("if 1");
                break;
            }else if(newInterval[1] == item[0]){
                  console.log("if 2",intervals[i-1],item,newInterval);
                
                newInterval[1]=item[1];
                doDelIndexes.add(i);
                break;
            }
            else if(newInterval[1] > item[0]){
                
                if(newInterval[1] <= item[1]){
                     console.log("if 3",newInterval,item);
                    newInterval[1]=item[1];
                    doDelIndexes.add(i);
                   
                   
                }else{
                     console.log("if 4");
                    doDelIndexes.add(i); 
                    continue;
                }
              
            }
               
         }
        console.log(prevIndex,newInterval,doDelIndexes);
      
        intervals= intervals.filter((item,index)=>  !doDelIndexes.has(index) );
        
        console.log("before splice",intervals);
           console.log("befafterore splice",intervals);
        return intervals;