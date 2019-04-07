
  let q=new Array();
  let s=new Array();
  let doneSet=new Set();
class Graph{
    constructor(noofVertices){
        this.noofV=noofVertices;
        this.adjList=new Map();
    }
    // functions to be implemented 
  
    addVertex(v){
        this.adjList.set(v,[]);
    } 
     addEdge(v, w) {
         this.adjList.get(v).push(w);
         this.adjList.get(w).push(v);
     }
    // printGraph() 
    BFS(startingNode) { 
        q.push(startingNode);
        while(q.length>0){
            let nowNode=q.shift();
            console.log(nowNode);
            doneSet.add(nowNode);
            this.adjList.get(nowNode).forEach(item=>{
                if(q.indexOf(item)<0&&!doneSet.has(item)){ q.push(item);
                 }    
            })
            
        }
        
       
    } 
    DFS(startNode){
            doneSet.add(startNode);
            console.log(startNode);
            if(doneSet.length==7)return;
            this.adjList.get(startNode).forEach(item=>{
                if(!doneSet.has(item)){
                    doneSet.add(item);
                    this.DFS(item);
                }

            })
        
    }
    DFSIter(startNode){
      
        s.push(startNode);
        while(s.length>0){
            let currNode=s.pop();
            doneSet.add(currNode);
            console.log(currNode);
            this.adjList.get(currNode).forEach(item=>{
                if(s.indexOf(item)<0&&!doneSet.has(item)){ 
                    s.push(item); 
                }   
            })
         }
    
}
}
var g = new Graph(7); 

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");                                                                                                                                                                                                                                                                                                             
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");



g.DFSIter('A');


