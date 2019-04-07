    
    class BinaryTree{
        constructor(root){

            this.root=root;
        }

         addNode(newNode){
       
            addNodeAux(this.root,newNode);
        
       }
        print(curr){
            if(curr==null)
                return;
            
            this.print(curr.left);
            console.log(curr.data+",");
            this.print(curr.right);
         }
         printPre(curr){
            if(curr==null)
                return;
            console.log(curr.data+",");
            this.printPre(curr.left);
           
            this.printPre(curr.right);
            
         }
         printPost(curr){
            if(curr==null)
                return;
            
            this.printPost(curr.left);
           
            this.printPost(curr.right);
            console.log(curr.data+",");
            
         }
         findLeastCommonans(node1,node2){
            let temp=this.root;
            if(node2.data<node1.data){
                return null;
            }
            while(true){
                if(node1.data>temp.data && node2.data>temp.data){
                    temp=root.right;
                }else{
                    return temp;
                }

            }
           

         }
         deleteNode(node){
             console.log(deleteAux(this.root,node.data));
         }  
         findNode(node){
            console.log(findAux(this.root,node.data));
        } 

    }
    class node {

        constructor(data,left,right){
            this.data=data;
            this.left=left;
            this.right=right;
        }
        tostring(){
            return `${this.data}`;
        }
        print(){
            console.log( `${this.data}`);
        }
    
    }
    function findMax(node){
        while(node&&node.right!=null){
            
            node=node.right;
        }
        return node;
    }
    function deleteNode(node){
        node=null;
    }
    function deleteAux(curr,data){
        let parent=null;
        let lflag=null;
        while(curr!=null){
           // console.log(curr.data,data);
             if(curr.data==data){
                if(curr.left==null&&curr.right==null){
                    console.log(parent.data,curr.data,lflag,"aaaaaaaaaaaaa");
                    if(lflag){
                        parent.left=null;
                    }else{
                        parent.right=null;
                    }
              
                }
                else if(curr.left==null){
                    parent=curr;
                    lflag=false;
                    curr=curr.right;
                }else if(curr.right==null){
                    parent=curr;
                    lflag=true;
                    curr=curr.left;
                }else {
                    let temp=findMax(curr.left);
                    curr.data=temp.data;
                    deleteAux(curr.left,temp.data);
                }

                return true;
            }
            else if(curr.data<data){
                parent=curr;
                lflag=false;
                curr=curr.right;
            }
            else if(curr.data>data){
                parent=curr;
                lflag=true;
                curr=curr.left;
            }
        }
        return false;
       
    }
    function findAux(curr,data){

        while(curr!=null){
            //console.log(curr.data,data);
             if(curr.data==data){
                return true;
            }
            else if(curr.data<data){
                curr=curr.right;
            }
            else if(curr.data>data){
                curr=curr.left;
            }
        }
        return false;
       
    }
    function addNodeAux( curr, newNode){

        console.log("----inside addnode-------");
        if(curr==null){
            if(prev.data>newNode.data){
                prev.left=newNode;
            }else{
                prev.right=newNode;
            }
        } else if(newNode.data<curr.data){
            prev=curr;
            curr=curr.left;
            //flag='l';
            addNodeAux(curr,newNode);
        }else if(newNode.data>curr.data){
            prev=curr;
            curr=curr.right;
           // flag='r';
            addNodeAux(curr,newNode);
        }
        
    }


    
    
    let flag='';
    let root=new node(5);
    //console.log(root);
    //print(root);

   
let btree=new BinaryTree(root);
    btree.addNode(new node(3));
    let node7=new node(7);
    btree.addNode(node7);
 
    btree.addNode(new node(2));

    new1=new node(4);
    let test3=new1;
    btree.addNode(new1);

    btree.addNode(new node(4.5));
    new1=new node(6);
    btree.addNode(new1);
    new1=new node(8);
    let test8=new1;
    btree.addNode(new1);
    btree.addNode(new node(6.5));
    let test1=new node(6.75);
    btree.addNode(test1);

    console.log(root,"-----------");
    console.log("in==");
    btree.print(root);
    console.log("pre==");

    btree.printPre(root);


    let res=btree.findLeastCommonans(test3,test1);
    console.log("least common ans=",(res)?res.data:"invalid");
    btree.findNode(node7);
    btree.deleteNode(node7);
    btree.print(root);
    console.log("pre==");

    btree.printPre(root);
    console.log("post==");
    //btree.printPost(root);
