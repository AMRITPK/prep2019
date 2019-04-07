

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

}

let trie=new Trie();

let baseNode=trie.root;

let prev=baseNode;

trie.addString("ace");
trie.addString("acer");
trie.addString("academy");
trie.addString("amrit");

console.log(trie.root);
console.log(trie.find("amma"));
//console.log(trie.root.map.get('a').map.get('c'));