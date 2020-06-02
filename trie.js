

class TrieNode{
    constructor (value){
        this.end=false;
        this.map=new Map();
    }
    

}
class Trie{
    constructor (){
        this.root=new TrieNode();
    }

    addString(str){

        let prev=this.root;
        str.split("").forEach((element,index) => {
            let curr =null; 
            if(prev.map.get(element))
            {   
                curr=prev.map.get(element)
            }
            else{
                curr =new TrieNode();
                prev.map.set(element,curr);
            }
            
        
            if(index==str.length-1){
                curr.end=true;
            }
            prev=curr;
        });
    }   
    find(str){
        let prev=this.root;
       return str.split("").every((element,index) => {
            console.log(element);
            let  curr=undefined;
            //console.log(prev.map.get(element));
            if(prev.map.get(element)){
               curr=prev.map.get(element);
               prev=curr;
               return true;
            }else{
                console.log("returning");
                return false;
            }
           
        })
       // return true;
    }
    matches(str){
    
        let prev=this.root;
        let depth=0;
        
        for (let char of str.split("")){
            if(prev.map.get(char))
            {    depth+=1;
                let curr=prev.map.get(char);
                if (curr.end)
                    return str.substring(0,depth);
                prev=curr;    

               
            }else{
                return false;
            }
        }
    }
    matchesAll(str){
    
        let prev=this.root;
        let depth=0;
        let ret=[];
        for (let char of str.split("")){
            if(prev.map.get(char))
            {    
                depth+=1;
                let curr=prev.map.get(char);
                if (curr.end){
                    //console.log("ended");
                    ret.push(str.substring(0,depth));
                }
                    
                prev=curr;    

               
            }else{
                return ret;
            }
        }
        return ret;
    }

}

let trie=new Trie();

let baseNode=trie.root;

let prev=baseNode;




var aux_bak=function(str,depth,trie){

    if(depth>str.length-1){
        return [];
    }
    console.log(str.substring(depth));
    let itemlist= trie.matchesAll(str.substring(depth));
    if(itemlist.indexOf(str.substring(depth)) > -1){
        console.log("returning",str.substring(depth));
        return [str.substring(depth)];
    }else{
        if(itemlist.length==0){
            return [];
        }else{
            let retlist=[];
            itemlist.forEach(item=>{
               let temp=aux(str,depth+item.length,trie);
               console.log("temp==",temp);
               temp.forEach(item1=>{ retlist.push( item+"-"+item1);});
            });
            return retlist;
        }
    }

}


var aux=function(str,depth,trie){

    if(depth==str.length){
        console.log("true return");
        return [];
    }else if(depth>str.length-1){
        console.log("false return");
         return false;
    }    
    console.log("check in trie",str.substring(depth));
    let itemlist= trie.matchesAll(str.substring(depth));

        if(itemlist&&itemlist.length>0){
       
            let retlist=false;
            itemlist.forEach(item=>{
               let temp=aux(str,depth+item.length,trie);
               console.log("temp==",temp);
               if(temp.length==0){
                   if(!retlist) retlist=[];
                    retlist.push( item);
               }else if(temp.length>0){
                     if(!retlist) retlist=[];
                     temp.forEach(item1=>{ retlist.push( item+" "+item1);});
               }
                    
            });
            return retlist;
        }else{
            console.log("false return2");
            return false;
        }
    

}

trie.addString("acer");

trie.addString("academy");
trie.addString("mango");
trie.addString("pine");
trie.addString("pineapple");
trie.addString("apple");
//console.log(trie.root);
console.log(trie.matchesAll("pine"));
//console.log("aaaaa",trie.matchesAll("pineapplemango"));
//console.log(trie.root.map.get('a').map.get('c'));

//console.log("bbb",aux("asdf",0,trie));


var wordBreak = function(s, wordDict) {
    let trie=new Trie();
    wordDict.forEach(item=>{
        trie.addString(item);
    });
    
    let temp= aux(s,0,trie) ;
    console.log("tempppppppppppppp",temp);
    return (temp)?temp:[]; 
    
    
};

let strr="catsandog";
let arrr=["cats","dog","sand","and","cat"]
console.log(wordBreak(strr,arrr));