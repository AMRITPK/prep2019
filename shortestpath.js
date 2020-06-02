
function mem1() {
    let arr=[];
    for(let i=-1;i<=10;++i){
        if(!arr[i])
            arr[i]=[];
        for(let j=-1;j<=10;++j){
            if(j==-1||j==10||i==-1||i==10)
                arr[i][j]=-1;
            else    
                arr[i][j]=0;
        } 
    }
    return arr;
}

function shortestpath(arr,source,dest){
   
    let mem=mem1();
    
    mem[3][1]=-1;

    mem[3][2]=-1;
    mem[4][2]=-1;
    mem[5][2]=-1;
    mem[6][2]=-1;
    mem[7][2]=-1;

    mem[3][7]=-1;
    mem[3][8]=-1;
    mem[3][9]=-1;

    mem[4][7]=-1;
    mem[5][7]=-1;
    mem[6][7]=-1;
    mem[7][7]=-1;

    mem[5][1]=0;

    mem[5][8]=-3;
console.log(mem1,"---------");
    let temp=source;
    let queue=[];
    let counter=0;
    while(temp!=undefined){
        console.log(mem,counter);
        counter++;
        //if(counter>200)return;
     
       // let left=[temp[0],temp[1]-1];
       // let right=[temp[0],temp[1]+1];
      //  let up=[temp[0]+1,temp[1]];
      //  let down=[temp[0]-1,temp[1]];
        console.log(arr[temp[0]][temp[1]-1]);
        console.log(arr[temp[0]][temp[1]+1]);
        console.log(arr[temp[0]+1][temp[1]]);
        console.log(arr[temp[0]-1][temp[1]]);

        if(temp[0]==dest[0] && temp[1]==dest[1])
        return Math.min( mem[temp[0]][temp[1]-1] ,mem[temp[0]][temp[1]+1] ,mem[temp[0]+1][temp[1]],mem[temp[0]-1][temp[1]] )+1;

        if(arr[temp[0]][temp[1]-1]==0){ //left
            if(!mem[temp[0]][temp[1]-1]){
                mem[temp[0]][temp[1]-1]=1+mem[temp[0]][temp[1]];
                queue.push([temp[0],temp[1]-1]);
            }
        }
        if(arr[temp[0]][temp[1]+1]==0){ //right
            if(!mem[temp[0]][temp[1]+1]){
                mem[temp[0]][temp[1]+1]=1+mem[temp[0]][temp[1]];
                queue.push([temp[0],temp[1]+1]);
            }
        }
        if(arr[temp[0]+1][temp[1]]==0){//up
            if(!mem[temp[0]+1][temp[1]]){
                mem[temp[0]+1][temp[1]]=1+mem[temp[0]][temp[1]];
                queue.push([temp[0]+1,temp[1]]);
            }
        }
        if(arr[temp[0]-1][temp[1]]==0){//down
            if(!mem[temp[0]-1][temp[1]]){
                mem[temp[0]-1][temp[1]]=1+mem[temp[0]][temp[1]];
                queue.push([temp[0]-1,temp[1]]);
            }
        }
     
       

        temp=queue.shift();


    }

}




let array1=mem1();


array1[3][1]=-1;

array1[3][2]=-1;
array1[4][2]=-1;
array1[5][2]=-1;
array1[6][2]=-1;
array1[7][2]=-1;

array1[3][7]=-1;
array1[3][8]=-1;
array1[3][9]=-1;

array1[4][7]=-1;
array1[5][7]=-1;
array1[6][7]=-1;
array1[7][7]=-1;

array1[7][1]=-1;

array1[5][1]=-2;

array1[5][8]=-3;
//console.log(array1);
console.log(shortestpath(array1,[5,1],[5,8]));

