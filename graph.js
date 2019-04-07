

class Queue{
    constructor (){
       // this.size=size;
        this.q=[];
    }
    enqueue(item){
        this.q.push(item);
    }
    dequeue(){
       return this.q.shift();
        
    }
    isEmpty(){
        //console.log(this.q);
        if (this.q.length==0){
            return true;
        }
        else
        return false;
    }
}
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
        console.log("asd");
        // create a visited array 
        var visited = []; 
        for (var i = 0; i < this.noofV; i++) 
            visited[i] = false; 
      
        // Create an object for queue 
        var q = new Queue(); 
      
        // add the starting node to the queue 
        visited[startingNode] = true; 
        q.enqueue(startingNode); 
      
        // loop until queue is element 
        while (!q.isEmpty()) { 
            // get the element from the queue 
            var getQueueElement = q.dequeue(); 
      
            // passing the current vertex to callback funtion 
            console.log(getQueueElement); 
      
            // get the adjacent list for current vertex 
            var get_List = this.adjList.get(getQueueElement); 
      
            // loop through the list and add the elemnet to the 
            // queue if it is not processed yet 
            for (var i in get_List) { 
                var neigh = get_List[i]; 
      
                if (!visited[neigh]) { 
                    visited[neigh] = true; 
                    q.enqueue(neigh); 
                } 
            } 
        } 
    } 
    bfs(v){
        let q=new Queue();
        q.enqueue(v);
        let doneSet=new Set();
        while(!q.isEmpty()){
            let temp=q.dequeue();
            console.log(temp);
            doneSet.add(temp);
            this.adjList.get(temp).forEach((item)=>{
                if(!doneSet.has(item))
                    q.enqueue(item)
            });
        }


    }


    bfsnew(v){
        bfs_yield
    }
    bfs_notworking(v) {
        const doneSet=new Set();
        
       
       this.bfs_aux(v,doneSet);
    }
    bfs_aux(v,doneSet) {
       // console.log(doneSet.size)
     
        if(doneSet.size==this.noofV) return;
        console.log("----------------",v);
        doneSet.add(v);
        //console.log(doneSet.size)
       this.adjList.get(v).filter(item1=>{if(!doneSet.has(item1)) return true}).forEach(eachItem=>{ 
          
            this.bfs_aux(eachItem,doneSet);
            //console.log(eachItem);
       }) 
       

    }
    dfs(v){
        let stack=[];
        let visited=new Set();
        visited.add(v);
        console.log(v);
        stack.push(v);
        while(v){
            this.adjList.get(v).forEach(eachv => {
                if(!visited.has(eachv)){
                    visited.add(eachv);
                    stack.push(eachv);
                    console.log(eachv);
                }
            })
            v=stack.pop();
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



g.BFS('A');

console.log("nnnnn");
g.bfnew('A');



function* printNos(){
    for(let i=0;i<10;++i){
        if(i%2==0)
            yield i;
    }
}

let printer=printNos();
console.log(printer.next());

setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next("down")),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
setTimeout(()=>console.log(printer.next()),100);
