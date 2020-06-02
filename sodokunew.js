/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var isValid=function(board,rowindex,colindex,currval){
    let rowgroupindex=Math.floor(rowindex/3);
    let colgroupindex=Math.floor(colindex/3);

    for(let i=3*(rowgroupindex);i<3*(rowgroupindex+1);++i){
        for(let j=3*(colgroupindex);j<3*(colgroupindex+1);++j){
            //console.log("checking",i,j,board[i][j],"curr=",currval);
            if(board[i][j]==currval){
                //console.log("ret false1");
                return false;
            }
        
        }

    }

    for(let i=0;i<board.length;++i){
        if(board[i][colindex]==currval){
            //console.log("ret false2");
            return false;
        }
    }
    for(let i=0;i<board[rowindex].length;++i){
        if(board[rowindex][i]==currval){
           // console.log("ret false3");
            return false;
        }
    }
   // console.log("ret true");
    return true;
}
var cellnosgen=function(board,depth){
    //console.log("inside ",depth);
    let counter=0;
    for(let i=0;i<board.length;++i){
             for(let j=0;j<board[i].length;++j){
           
                if(depth==counter)
                    return([i,j,counter]);
                counter++;
            }
     }
} 
var solveSudokuAux = function(board,depth) {
       // console.log(board,depth);
        if(depth==81) return true;
        let ret=cellnosgen(board,depth);
        let rowindex=ret[0];
        let cellIndex=ret[1];
             
        if(board[rowindex][cellIndex]=='.'){
            for(let i=1;i<10;++i){
               
                    if(isValid(board,rowindex,cellIndex,i)){
                        board[rowindex][cellIndex]=i+"";
                        if(solveSudokuAux(board,depth+1)){
                            //board[rowindex][cellIndex]==undefined;
                            return true;
                        }
                        else{
                            board[rowindex][cellIndex]='.';
                            
                        }
                    }
             } return false;
            
        }else{
            return solveSudokuAux(board,depth+1);
        }
       
        

};

var solveSudoku = function(board) {
   
    return solveSudokuAux(board,0);
};


let board=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(solveSudoku(board));