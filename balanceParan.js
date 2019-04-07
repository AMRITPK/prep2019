let str="}{asdf}";

let bbalanceVal= str.split("").reduce(function(prev,item){
    console.log(prev,item);
    if (item=='}' && prev==0){
        return prev;
    }
    if(item=='{'){
        prev+=1;
    }else if(item=='}'){
        prev-=1;
    }
    return prev;

},0);

console.log(bbalanceVal);