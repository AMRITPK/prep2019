//3 0 6 5 0 8 4 0 0 5 2 0 0 0 0 0 0 0 0 8 7 0 0 0 0 3 1 0 0 3 0 1 0 0 8 0 9 0 0 8 6 3 0 0 5 0 5 0 0 9 0 6 0 0 1 3 0 0 0 0 2 5 0 0 0 0 0 0 0 0 7 4 0 0 5 2 0 6 3 0 0
//3 6 7 5 3 5 6 2 9 1 2 7 0 9 3 6 0 6 2 6 1 8 7 9 2 0 2 3 7 5 9 2 2 8 9 7 3 6 1 2 9 3 1 9 4 7 8 4 5 0 3 6 1 0 6 3 2 0 6 1 5 5 4 7 6 5 6 9 3 7 4 5 2 5 4 7 4 4 3 0 7 
var G = require('generatorics');

let board = new Array(9);

console.log(board);

let rows="3 0 6 5 0 8 4 0 0 5 2 0 0 0 0 0 0 0 0 8 7 0 0 0 0 3 1 0 0 3 0 1 0 0 8 0 9 0 0 8 6 3 0 0 5 0 5 0 0 9 0 6 0 0 1 3 0 0 0 0 2 5 0 0 0 0 0 0 0 0 7 4 0 0 5 2 0 6 3 0 0";
let rowSets=[];
let colSets=[];
let boxSets=[];
rows.split(" ").forEach((item,index)=>{


   
   let i=Math.floor(index/9);
   let j=index%9;
    //if(index<9){

    //console.log(i,j,item,index);
  
    if (!board[i]) {
        board[i]=[]; rowSets[i]=new Set();
    }
    if (!colSets[j]) {
        colSets[j]=new Set();
    }
    rowSets[i].add(item);
    colSets[j].add(item);

    if(i<3&&j<3){
        if(!boxSets[0])boxSets[0]=new Set();
        boxSets[0].add(item); 
       
    }else if(i<3&&j<6){
        if(!boxSets[1])boxSets[1]=new Set();
        boxSets[1].add(item);
        
    }else if(i<3){
        if(!boxSets[2])boxSets[2]=new Set();
        boxSets[2].add(item);
     
    }
    else if(i<6&&j<3){
        if(!boxSets[3])boxSets[3]=new Set();
        boxSets[3].add(item);
       
       
    }
    else if(i<6&&j<6){
        if(!boxSets[4])boxSets[4]=new Set();
        boxSets[4].add(item);
       
    }else if(i<6){
        if(!boxSets[5])boxSets[5]=new Set();
        boxSets[5].add(item);
      
    } else if(j<3){
        if(!boxSets[6])boxSets[6]=new Set();
        boxSets[6].add(item);
        
    }
    else if(j<6){
        if(!boxSets[7])boxSets[7]=new Set();
        boxSets[7].add(item);
       
    }else {
        if(!boxSets[8])boxSets[8]=new Set();
        boxSets[8].add(item);
     
    }

    board[i][j]=item;

   // }

})
//console.log(board);
function boxNumbers(i,j){
    if(i<3&&j<3){
        return 0;
    }else if(i<3&&j<6){
        return 1;
        
    }else if(i<3){
        return 2;
     
    }
    else if(i<6&&j<3){
        return 3;
       
    }
    else if(i<6&&j<6){
        return 4;
       
    }else if(i<6){
        return 5;
      
    } else if(j<3){
        return 6;
    }
    else if(j<6){
        return 7;
    }  else{
        return 8;
    }
       
}
function isValid(val,board,i,j){
    if(colSets[j].has(val)) return false;
    else if(boxSets[boxNumbers(i,j)].has(val)) return false;
    else return true;

}
function* allposs(boardrow){
        console.log("getting for ",boardrow);
    let possiblesParent=[];
   for(let i=1;i<=9;++i){
       if(boardrow.indexOf(i+'')<0){
           possiblesParent.push(i+'');
         //  console.log("pushing");
       }
   }
   // console.log("to try..",possiblesParent);
    for (let possibles of G.permutation(possiblesParent)) { // assumes full length of array
        console.log("-yielding--",possibles);
        yield(possibles)
    }

}
function solve(board,depthParam){
   
    let depth=depthParam;
    if(depth>=9) return true;
    if (depth==8){
        console.log("amr",board);
        
    }
   
    for(let j in board[depth]){
        let item=board[depth][j];
        if(item=='0'){
            //console.log(item);
         /*
            let possiblit=yield poss().next();[];
            ['1','2','3','4','5','6','7','8','9'].reduce((possiblesParent,item1)=>{
                if (board[depth].join().indexOf(item1)<0)possiblesParent.push(item1);
                return possiblesParent;
            },possiblesParent);
            console.log(depth,"to try..",possiblesParent);
            */

            for (let possibles of allposs(board[depth])) { // assumes full length of array
                console.log("---to try perms-----",possibles);
                for (let index in possibles){

                    if( isValid(possibles[index],board,depth,j)  ){
     
                         board[depth][j]=possibles[index];
                         rowSets[depth].add(possibles[index]);
                         colSets[j].add(possibles[index]);
                         boxSets[boxNumbers(depth,j)].add(possibles[index]);
                         console.log(depth,"added",possibles.length);//,,board);
                         if(index==possibles.length)
                            if(solve(board,depth+1))
                            {
                                return true;
                            }
                         
                         /*else{
                            board[depth][j]='0';
                            rowSets[depth].delete(possibles[index]);
                            colSets[j].delete(possibles[index]);
                            boxSets[boxNumbers(depth,j)].delete(possibles[index]);
                            //console.log("removed items",board);
             
                            return false;
                         }
                         */

                         
     
                    }
                        board[depth][j]='0';
                        rowSets[depth].delete(possibles[index]);
                        colSets[j].delete(possibles[index]);
                        boxSets[boxNumbers(depth,j)].delete(possibles[index]);
                        console.log(depth,"removed items");//,board);
         
                        //return false;
                    
        
                    
                 }
              }
     
        } else{
            if(j==8){
                console.log("insde here");
                if(solve(board,j+1)){
                    return true;
                }else{
                    board[depth][j]='0';
                    rowSets[depth].delete(possibles[index]);
                    colSets[j].delete(possibles[index]);
                    boxSets[boxNumbers(depth,j)].delete(possibles[index]);
                    console.log(depth,"removed items");//,board); 
                    return false;
                }
            }
        }       

    }

}

console.log(board,"\n","res=",solve(board,0));
