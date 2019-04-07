/*
https://www.hackerrank.com/challenges/crossword-puzzle/problem
+-++++++++
+-++++++++
+-++++++++
+-----++++
+-+++-++++
+-+++-++++
+++++-++++
++------++
+++++-++++
+++++-++++
LONDON;DELHI;ICELAND;ANKARA


+L++++++++
+O++++++++
+N++++++++
+DELHI++++
+O+++C++++
+N+++E++++
+++++L++++
++ANKARA++
+++++N++++
+++++D++++

*/

let str=
`+++--+++++
++------++
+-----++++
++++++++++
++++++++++
MONEY;AMRITH;HI`;
let crossword = [];

for (let i = 0; i < 5; i++) {
    const crosswordItem = str.split("\n")[i];
    crossword.push(crosswordItem);
}

const words = str.split("\n")[5].split(";");



console.log(crossword,words);
const result = crosswordPuzzle(crossword, words);
function* unUsedCounter(hintsMap){
    let iter=hintsMap.values();
    let curr=iter.next();
    var counter=0;
    while(!curr.done){
        console.log(curr.value);
        if(!curr.value){
           
            counter+=1;
        }
           
        curr=iter.next();    
    }
    return counter;
    

}
function* tryWith(hint,crosswordrow,startWordIndex,hori,depth){
  
    if(crosswordrow[startWordIndex]!='+'){
        for(char of hint){
            if(startWordIndex>crosswordrow.length){
                
                yield false;
            }
            if(crosswordrow[startWordIndex]==char||crosswordrow[startWordIndex]=='-'){
                startWordIndex+=1;
            }else{
                yield false;
            }
        }
        if(crosswordrow[startWordIndex+1]='+'||startWordIndex==crosswordrow.length){
            //console.log("**********",crosswordrow[startWordIndex+1],startWordIndex,crosswordrow.length);
            yield true;
        }
       
    }
}
function crosswordPuzzleAux(crosswordarr,hintsMap,hori,depth,state){
    console.log(crosswordarr,hintsMap,hori,depth,state);
    if (hori) {
        if(depth==crosswordarr.length){
            if(unUsedCounter(hintsMap).next().value==0){
                return true;
            }
        }
        let crosswordrow = crosswordarr[depth];
        let crosswordrowBKP= [];
        crosswordrow.forEach((item,index)=>crosswordrowBKP[index]=item);

        let startWordIndex=crosswordrow.findIndex((char, index) => { return (char != '+')  });
        console.log(crosswordrow,"in here",startWordIndex);
        if (startWordIndex >= 0) { //some word to fill exist
            let startWordIndexTemp=startWordIndex;
           

          let iter=  hintsMap.entries();
          let curr= iter.next();
          while(!curr.done){
              
               console.log("aaaa",curr.value);
               let hint=curr.value[0];
               let used=curr.value[1];
                if (!used) {

                    let ispossible= tryWith(hint,crosswordrow,startWordIndex,hori,depth).next().value;

                    if(ispossible){
                        for(char of hint.split("")){
                            crosswordrow[startWordIndexTemp]=char;
                            startWordIndexTemp+=1;
                        }
                        hintsMap.set(hint,true);
                        if(crosswordPuzzleAux(crosswordarr,hintsMap,true,depth+1,state))
                             return true;
                        else{
                            hintsMap.set(hint,false); 
                            crosswordrow  =crosswordrowBKP;  
                        }                                

                    }else{
                        if(crosswordPuzzleAux(crosswordarr,hintsMap,true,depth+1,state))
                           return true;
                       else{
                            hintsMap.set(hint,false); 
                            crosswordrow  =crosswordrowBKP;  
                          } 
                    }

                }
                curr= iter.next();
            };  
            return false;        
        }
      
    }
}
function crosswordPuzzle(crossword, hints) {
    let hintsMap = new Map();
    hints.forEach((item) => hintsMap.set(item, false) );
    let crosswordarr = [];
   

    crossword.forEach((row, rownum) => {       
        crosswordarr[rownum] = row.split("");

    })
    state = {};
    state.hori = true;
    console.log(hintsMap);
    hintsMap.forEach((value,key) => { console.log(key ,value) });
    //console.log(hintsMap.forEach((used,hint)=> used));
    crosswordPuzzleAux(crosswordarr,hintsMap,true,0,state);
    
    //console.log("asdf", unUsedCounter(hintsMap).next() );
}