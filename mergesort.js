function concat(arr1,b1,e1,arr2,b2,e2){
    console.log("in concat",arr1,b1,e1,b2,e2);
    let ptr1=b1;
    let ptr2=b2;
    while(true){
        console.log("in while",ptr1,ptr2,b1,e1,b2,e2);
        if(ptr1>e1||ptr2>e2){
            break;
        }
   if(arr1[ptr1]<arr2[ptr2]){
        ptr1+=1;
        continue;
    }else if(arr1[ptr1]>= arr2[ptr2]){
        //swap
        let temp=arr1[ptr1];
        arr1[ptr1]= arr2[ptr2];
        arr2[ptr2]=temp;
        ptr1+=1;
        continue;
    }
    }
    return arr1;
}
function mergesort(arr,begparam,endparam){
    let end=endparam;
    let beg=begparam;
    if(end-beg<=2){
        
        console.log("in if");
        
        for (let i=beg;i<=end;++i){
             let smallestIndex=i;
            for (let j=i;j<=end;++j){
                if(arr[j]<arr[smallestIndex]){
                    smallestIndex=j;
                   
                }
            }
            let temp=arr[smallestIndex];
            arr[smallestIndex]=arr[i];
            arr[i]=temp;
           
         }
         console.log("ret",arr);
         return arr;
    }
    console.log(Math);
    let mid=parseInt((beg+end)/2);
    
   return concat(mergesort(arr,0,mid-1),0,mid-1,mergesort(arr,mid,end),mid,end);
}

let arr=[8,3,1,4,7,5,2,11,22,6,10];
//arr=[3,5,10,1,11,13];
//console.log(mergesort(arr,0,arr.length-1));


const assert=require("assert");
let test1=[3,5,10,1,11,13];

test1= [1, 2, 3, 4, 5, 8, 7, 11, 6, 10, 22 ] ;
console.log( concat(test1,0,7,test1,8,10));
//assert.equal("1","2");