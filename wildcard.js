
function optimalUtilization(deviceCapacity, foregroundAppList, 
    backgroundAppList)
{   let res=[];
    // WRITE YOUR CODE HERE
   let fgreverseMap=new Map();
   let sortedfgarray=[];
    foregroundAppList.forEach(item=>{
        let itemarr=fgreverseMap.get(item[1]);
         sortedfgarray.push(item[1]);
        if(itemarr){
             itemarr.push(item[1]);
        }else{
            fgreverseMap.set(item[1],[item[0]]);
        }
       
    });
    sortedfgarray.sort();
    console.log(sortedfgarray,fgreverseMap);
     let bgreverseMap=new Map();
     let sortedbgarray=[];
    backgroundAppList.forEach(item=>{
        let itemarr=bgreverseMap.get(item[1]);
        sortedbgarray.push(item[1]);
        if(itemarr){
             itemarr.push(item[0]);
        }else{
            bgreverseMap.set(item[1],[item[0]]);
        }
       
    });
    sortedbgarray.sort();
    console.log(sortedbgarray,bgreverseMap);
    let max=-Infinity;
    for(let i=0;i<foregroundAppList.length;++i){
        for(let j=0;j<backgroundAppList.length;++j){
            let currsum=foregroundAppList[i][1]+backgroundAppList[j][1];
            console.log(currsum);
            if( currsum <= deviceCapacity && currsum >max){
                max=currsum;
            }
        }
    }
    console.log("max=",max);
    for(let i=0;i<foregroundAppList.length;++i){
        console.log("amr",foregroundAppList[i][1]);
        let delta=max-foregroundAppList[i][1];
        console.log("delta=",delta);
        let temp=bgreverseMap.get(delta);
        if(temp){
            console.log("fgjobs=",foregroundAppList[i][0],"bgjobs=",temp);
            temp.forEach(item1=>{
                res.push([foregroundAppList[i][0],item1]);
            })
            
        }

    }
    if(res.length==0)
        res=[[]];
    return(res);


   
    
    
}

console.log(optimalUtilization(16,[[2,7],[3,14]],[[2,10],[3,14]]));