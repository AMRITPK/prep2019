
function returnindex(char){
    let arr="abcdefghijklmnopqrstuvwxyz".split("");
    return arr.indexOf(char);
}

function returnchar(index){
    let arr="abcdefghijklmnopqrstuvwxyz".split("");
    return arr[index];
}
//let trieArr="abcdefghijklmnopqrstuvwxyz".split("");

//let ret=trie.addItem("dad",0);
function createTrie(){
    let item={};
    item.arr=[];
    item.isEnd=-1;
    return item;
}
function addItem(trie,str,index){
    if(!str || str.length==0)
        return;
    let prev=trie;
    for(let i=0;i<str.length;++i){
        if(!prev.arr[returnindex(str[i])] || prev.arr[returnindex(str[i])].length==0){
            prev.arr[returnindex(str[i])]=createTrie();
            if(prev.isEnd>=0){
                //console.log("in else",str,i);
            }  else{
                prev.isEnd=-1;
               
            }      
        }else{
            //console.log("in else",str,i);
        }
        prev=prev.arr[returnindex(str[i])];
    }
    prev.isEnd=index;
}

let trie= createTrie();
addItem(trie,"dad",0);
addItem(trie,"dam",1);
addItem(trie,"cat",2);

addItem(trie,"catamarines",3);

console.log(trie);

console.log(trie);
console.log("-- -2->",searchItem(trie,"da"));
/*
console.log("-- -1->",searchItem(trie,"asdfa"));
console.log("-- -1->",searchItem(trie,"ta"));
console.log("-- +2->",searchItem(trie,"cat"));
console.log("-- +3->",searchItem(trie,"catamarines"));
console.log("-- -1->",searchItem(trie,"catamarinessdf"));
*/

function searchItem(trie,str){
    let curr=trie;
    for(let i=0;i<str.length;++i){
        curr= curr.arr[returnindex(str[i])];
        if(!curr){
            return -1;
        }
    }
    let flag=false;
    curr.arr.forEach(element => {
        if(element ){
            flag=true;
        }else{
           
        }
    });
    if(flag==true&& curr.isEnd==-1){
        preorder(curr);
        return -2;
    }
    return curr.isEnd;
}


function preorder(curr){
    console.log("in pre");
    if(!curr){console.log("done");return;}
    curr.arr.forEach((element,index) => {
      
            console.log(index,returnchar(index));
            preorder(element);

    });

}