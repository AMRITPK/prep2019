var titleToNumber = function(s) {
  
    let counter=0;
    let queue=new Array();
    let items="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let beg=true; 
    while(beg||queue.length >0){
        //console.log(queue);
       let temp="";
       beg=false;
        let qshift=queue.shift();
        if(qshift)
           temp= qshift;
        
        if(temp==s)return counter;
        
        for(let x=0;x<items.length;++x){
            let item=items.charAt(x);
            counter+=1;
            let topush=temp+item;
            if(topush==s)
                return counter;
           // console.log(topush);
            queue.push(topush);
           
        };
    }
    
};

console.log(titleToNumber("WORLD"));