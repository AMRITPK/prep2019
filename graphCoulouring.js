/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    let reds=new Set();
    let greens=new Set();
    if(dislikes[0][0]==dislikes[0][1]){
        return false;
    }
    reds.add(dislikes[0][0]);
    greens.add(dislikes[0][1]);
    let donesSet=new Set();
    donesSet.add(0);
 
    for (let i=1,iOuter=1;iOuter<dislikes.length;++iOuter){
        //console.log("outer i=",i);
        if(donesSet.has(iOuter)) continue;
        if(dislikes[iOuter][0]==dislikes[iOuter][1]){
            return false;
        }
        i=iOuter;
        let flag=false;
        while(i<dislikes.length){
            //console.log("local i=",i);
            if( reds.has(dislikes[i][0]) || greens.has(dislikes[i][0]) || reds.has(dislikes[i][1]) || greens.has(dislikes[i][1]) ){
                //got the ivalue which has one connected\//console.log("local i=",i);
                //console.log("setting flag");
                 flag=true;
                break;
            }else{
                //increment and search
                ++i;
            } 
        }
        if(!flag){
            i=iOuter;
        }
        //console.log(i,iOuter,donesSet,dislikes.length);
        if(reds.has(dislikes[i][0]) && reds.has(dislikes[i][1])){
            return false;
        } else if(greens.has(dislikes[i][0]) && greens.has(dislikes[i][1])){
            return false;
        } else if(reds.has(dislikes[i][0])){
            //only red has first
            
            greens.add(dislikes[i][1]);
             donesSet.add(i);
        } else if(reds.has(dislikes[i][1])){
           // onliy reg has second
            greens.add(dislikes[i][0]);
             donesSet.add(i);
            
        }else if (greens.has(dislikes[i][0])){
            // onliy green has first
             reds.add(dislikes[i][1]);
             donesSet.add(i);
            
        }else if(greens.has(dislikes[i][1])){
              // onliy green has
             reds.add(dislikes[i][0]);
             donesSet.add(i);
            
        }else{
            //none having
            reds.add(dislikes[i][0]);
            greens.add(dislikes[i][1]);
             donesSet.add(i);
        }
        

        
    }
    return true;

};

let input=[[1,1]];
//console.log(possibleBipartition(4,input));