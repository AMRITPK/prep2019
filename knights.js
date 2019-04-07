
function validmooves(starti,startj){
    let ret=[];
     let poss=[-2,-1,+1,+2];
      poss.forEach(function(possvalx){
        poss.forEach(function(possvaly){
            if(Math.abs(possvaly)!=Math.abs(possvalx)){
                //console.log(ret);
                if(starti+possvalx >=0  && starti+possvalx <6 && startj+possvaly >=0 && startj+possvaly <6 )
                     ret.push([starti+possvalx,startj+possvaly]);
                
            }

        });

     });
     //console.log(ret);
   return ret;  

}
var glo=0;
function knights(board,starti,startj,counterarg){
    let counter=counterarg;
  
   // let count= board.reduce(function(counter,row){  
    //    return counter+row.reduce(function(counter,val){ if(val)counter+=1; return counter; },0);
    // },0);  
     //console.log(count);
    // board[starti][startj]=counter;
    if(counter==37){
      
        glo+=1;
        if(glo%500==0)console.log(glo,board);
        return true;
    }
   
    validmooves(starti,startj).forEach(([xval,yval],index,validmooves)=>{
        //console.log("xval=",xval,"yval=",yval);
        if (!board[xval][yval]){    //isvalid
            
           // console.log("no value here",xval,yval);
            board[xval][yval]=counter;
            counter+=1;
            if( knights(board,xval,yval,counter)) 
                {
                    board[xval][yval]=undefined;
                    return true;

                } 
            else{
                counter-=1;
                board[xval][yval]=undefined;
                return false;
            }
            
           
            
        }
        //if(index==validmooves.length-1){
            return false
       // }
       

    });
}

let board=[];
for (i=0;i<6;++i){
    for (j=0;j<6;++j){
        board[i]=board[i]||[];
        board[i][j]=false;
    }
}
console.log(board);


//console.log(validmooves(2,3));
//validmooves(0,0).forEach(([xval,yval],index)=>{ console.log(xval,yval,index)});
board[0][0]=0;
console.log("asdfasdf",knights(board,0,0,1));