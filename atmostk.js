
function atMostK(A, K) {
    let counter=0;
    let map=new Map();
    let counterdone=new Map();
    //left=i

    for(let left=0,right=0;left<A.length;){
        console.log(left,right,map,counter);
        let item=A[right];
        console.log("considering",item);
        if(map.size<K){
            map.set(item,(map.get(item)?map.get(item):0)+1);
            if(counterdone.get(right)!=true)
            {
                counter+=(right-left)+1;
                counterdone.set(right,true);
            }
            if(right+1<A.length){
              
                right++;
            }else{
                left++;
            }

        }else if(map.size==K){
            if(map.has(item)){
                map.set(item,map.get(item)+1);
                if(counterdone.get(right)!=true)
                {
                    counter+=(right-left)+1;
                    counterdone.set(right,true);
                }
                if(right+1<A.length){
                  
                    right++;
                }else{
                    left++;
                }
            }else{
                if(map.get(A[left])==1){
                    map.delete(A[left]);
                }else{
                    map.set(A[left],map.get(A[left])-1);
                }
               
                left++;
            }
        }

       

    }
   return counter;
}

function atMostK_ref(A, K) {
    let count = {};
  let maxArr = 0, windowStart = 0;

  for (let windowEnd = 0; windowEnd < A.length; windowEnd++) {
      const rightInt = A[windowEnd];

      if (!(rightInt in count)) {
          count[rightInt] = 0;
      }

      if (count[rightInt] === 0) {
          K -= 1;
      }
      count[rightInt] += 1;

      while (K < 0) {
        const leftInt = A[windowStart];
        console.log(windowStart,leftInt,rightInt,count);

      
          count[leftInt] -= 1;
          if (count[leftInt] === 0) {
              K += 1;
          }
          windowStart += 1;        
        }
      maxArr += windowEnd - windowStart + 1;
  }

  return maxArr;
}

//console.log(atMostK_ref([1,2,3,4],3));
console.log(atmostk_new([1,2],0));
console.log("new",atMostK([1,2],0));


//1,2,3,12,23,123
//1,2,3,4,12,23,34,123,234
function isVal(arr,left,right,K){
    let  map=new Map();
    console.log(arr.filter(i=>i>=left&&i<=right));
    for(let i=left;i<=right;++i){
        if(!map.get(arr[i])){
            map.set(arr[i],1);
        }else{
            map.set(arr[i],map.get(arr[i])+1);
        }
    }
    if(map.size<=K)
        return true;
    return false;
}
function atmostk_new(arr,K){
    let left=0,right=0,counter=0;
    while(left<arr.length){

        right=left;
        while(right<arr.length){
            let res=isVal(arr,left,right,K);
            if(res){
                counter++;
                right++;
                
            }else{
                break;
            }
        }
       
        left++;
    
    }
    return counter;

}
//1,2,1,2,3
function atMostK_new1(arr,K){
    let left=0,right=0,counter=0;
    let map=new Map();
   
    while(left<arr.length){

       // right=left;
        //map=new Map();
        
        while(right<arr.length){
            console.log("----",arr.filter((x,index)=>index>=left&&index<=right),map,counter);

            if(map.has(arr[right])){
                map.set(arr[right],map.get(arr[right])+1);
            }else{
                map.set(arr[right],1);
            }
            if(map.size<=K){
                counter++;
               console.log("incrementing");
                right++;
                               
                
            }else{

                if(map.get(arr[right])==1){
                    map.delete(arr[right]);
                }else{
                    map.set(arr[right],map.get(arr[right])-1);
                }
                break;
            }
        }
      
        if(map.get(arr[left])==1){
            map.delete(arr[left]);
        }else{
            map.set(arr[left],map.get(arr[left])-1);
        }
         left++;
    
    }
    return counter;

}