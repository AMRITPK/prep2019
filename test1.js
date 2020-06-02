
[1,2,3,5,6,7,8,9]

function winner(n,k){
    let arr=[];
    for(let i=0;i<n;++i){
        arr[i]=i+1;
    }
    let counter=1;
    let index=0;
    let temp=0;
    
    console.log("bef spl",arr);
    //arr.splice(5,1);
    //console.log("after spl",arr);
    while(arr.length){

        if(counter==k){
            temp=arr[index];
            let rem=arr.splice(index,1);
            console.log("after spl",rem,arr);
            counter=0;
        }else{
            index++;
            if(index>=arr.length){
                index=0;
            }
        }

        counter++;

    }
    return temp;

}

console.log(winner(10,30));


