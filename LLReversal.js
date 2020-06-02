class LLNode{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class LL{
    constructor(rootVal){
        this.root=new LLNode(rootVal);
        
   
    }
 addNode(itemval) {
         let nownode=this.root;
         let prev=this.root;
        while(nownode){
            prev=nownode;
            nownode=nownode.next;
        }
        prev.next=new LLNode(itemval);
    }
    print(){
        let nownode=this.root;
     
       while(nownode){
           console.log(nownode.val+"->");
           nownode=nownode.next;
       }
    }
}
let ll=new LL(1);

console.log(ll);
ll.addNode(2);
ll.addNode(3);
ll.addNode(3);
console.log(ll.print());