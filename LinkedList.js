class LLNode{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class LL {
    constructor(root){
        this.root=new LLNode (root);
    }
    addNode(val) {
        let curr=this.root;
        let  prev=this.root;
        while (curr!=null){          
           prev=curr;
            curr=curr.next;

        }
        prev.next=new LLNode(val);

        
    }
    deleteNode(val){
        let curr=this.root;
        let  prev=this.root;
        while (curr !=null && curr.val!=val){          
           prev=curr;
            curr=curr.next;

        }
        if(curr!=null && curr.val==val){
            prev.next=curr.next;
            return true;
        }return false;
        
        //delete(curr);
    }
    print(){
        let curr=this.root;
        while (curr!=null){          
            console.log(curr.val+"->");
            curr=curr.next;

        }
    }
   
}

let ll=new LL(1);
ll.addNode(2);ll.addNode(3);ll.addNode(4);ll.addNode(5);
ll.print();
console.log(ll.deleteNode(3));
ll.print();
