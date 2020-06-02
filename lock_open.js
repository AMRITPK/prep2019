
var openLock = function(deadends, target) {
    deadends=new Set(deadends);
    let beg=[0,0,0,0];
    let dones=new Map();
    let queue=[];
    dones.set(beg.join(""),0);
    queue.push(beg);
    queue.push("#");
    let possibles=[[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,-1],[0,0,-1,0],[0,-1,0,0],[-1,0,0,0]];
    let curr;
    let depth=0;

    
    while(curr=queue.shift()){
      if(queue.length%100==0)
            console.log(depth,queue.length,dones.size);
        if(dones.size==999999){
            let gen=dones.keys();
            let tem;
            let ctr=0;
            while(tem=gen.next()){
                if(ctr>500){
                     console.log("a",tem.value);
                }
                if(ctr>1000){
                  return -5;
                    
                }
                ctr++;
             
            }
        }
        if(curr=="#"){
            //console.log(queue.length);
            depth++;
            console.log("depth=",depth);
            //console.log(loopcounter,"increment",depth);

            if(queue.length && queue[0]!="#" ){
               queue.push("#");
            }
 
            continue;
        }
          if(curr.join("")==target){
                    //console.log("reached",curr);
                    
                    let ress='0000,1000,1100,1200,1201,1202,0202';
                    ress.split(",").forEach(itm=>{
                        console.log(itm,"item",dones.get(itm));
                    })
              let str="";
                    dones.forEach((item33,item3)=>{
                        str+="-"+item3;
                    })
              console.log(str);
                    return depth;
                } 
      
        let tempres=[];
        for(let i=0;i<possibles.length;++i){
            
            let poss=possibles[i];
           // let next=[curr[3]+poss[3]>=0?curr[3]+poss[3]:9,curr[2]+poss[2]>=0?curr[2]+poss[2]:9,curr[1]+poss[1]>=0?curr[1]+poss[1]:9,curr[0]+poss[0]>=0?curr[0]+poss[0]:9];
           let next=[curr[0]+poss[0],curr[1]+poss[1],curr[2]+poss[2],curr[3]+poss[3]];
            if(curr.join("")=="0011"){
                console.log("aaaaaaaaa",curr,next);
            }
            if(next.some(itm=>(itm<0 || itm>9))){
                //console.log("skipping",next);
                continue;
            }
                
            if(!deadends.has(next.join("")) && !dones.has(next.join(""))){
        
                
               
                
                
                dones.set(next.join(""), 1+dones.get(curr.join("")));
                queue.push(next);
                tempres.push(next.join(""));
            }
        }
        console.log(curr.join(""),"==>",tempres.join("-"));
   
 
    }
    return -1;

};


let deadends=["0201","0101","0102","1212","2002"];

let target="0202";

console.log(openLock(deadends,target));