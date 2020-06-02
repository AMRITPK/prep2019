
function* nextdirection(){
    let arr=["r","d","l","u"];
    let i=0;
    while (true){
        
            yield(arr[i++]);
            if(i>=4)
                i=0;
       
    }
}
function nextCordinates(newiParam,newjParam,direction,res,generator,n){
    //console.log(res,direction);
        let newi,newj;
         if(direction=="r"){
            [newi,newj]= [newiParam,newjParam+1]
         }
         if(direction=="d"){
            [newi,newj]= [newiParam+1,newjParam]
         }
        if(direction=="l"){
            [newi,newj]= [newiParam,newjParam-1]
         }
        if(direction=="u"){
            [newi,newj]= [newiParam-1,newjParam]
         }
    //0,0
         if(newi>=n || newj>=n){
            return nextCordinates(newiParam,newjParam,generator.next().value,res,generator,n);
        }
        if(newi<0 ){
            return nextCordinates(newiParam,newjParam,generator.next().value,res,generator,n);
        }else if(newj<0 ){
            return nextCordinates(newiParam,newjParam,generator.next().value,res,generator,n);
        }
        if(!res[newi]){
            return nextCordinates(newiParam,newjParam,generator.next().value,res,generator,n);
        }
        if(res[newi][newj]!=undefined){
            console.log("in herer");
            //exit(0);
            return nextCordinates(newiParam,newjParam,generator.next().value,res,generator,n);
        }
       
        return [newi,newj,direction];
}
var generateMatrix = function(n) {
    let res=[];
    for (let i=0;i<n;++i){
        res[i]=[];
        for (let j=0;j<n;++j){
            res[i][j]=undefined;
        }
    }
   // console.log(res);
    let cord=[0,0];
    let counter=1;
    let generator=nextdirection();
    let direction=generator.next().value;
    while(true){
        //let [newi,newj]=direction;
      
        res[cord[0]][cord[1]]=counter;

        if(counter==n*n){
            break;
        }
         counter++;
        [cord[0],cord[1],direction]=nextCordinates(cord[0],cord[1],direction,res,generator,n);
           //direction=cord[2];
          
    }
    return res;
   
};
let genn=nextdirection();
//console.log(genn.next().value);console.log(genn.next().value);console.log(genn.next().value);console.log(genn.next().value);console.log(genn.next().value);
let res=generateMatrix(4);
console.log(res);