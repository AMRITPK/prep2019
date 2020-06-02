function lengthEachScene(inputList)
{   let ret=[];
    // WRITE YOUR CODE HERE
    if(!inputList)return[];
    let countMap=new Map();
    let countRightDP=[];
    for(let i=inputList.length-1;i>=0;--i){
        let item=inputList[i];
        if(countMap.has(item)){
            countMap.set(item,countMap.get(item)+1);
        }else{
             countMap.set(item,1);
        }
        countRightDP[i]=countMap.get(item);
    }

    console.log(countRightDP,countMap);
    let tempMap=new Map();
    let beg=-1;
    for(let i=0;i<inputList.length;++i){
        let item=inputList[i];

        tempMap.set(item,countRightDP[i]);
        let flag=false;
        tempMap.forEach((value,key)=>{
            if(value>1){
                flag=true;
            }
        });
        if(flag==false){
            tempMap=new Map();
            ret.push(i-beg);
            beg=i;
        }

    }
    console.log(ret);
}

//lengthEachScene(['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j']);

lengthEachScene(['a','b','c','a']);
