function printhello(){
    return new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        resolve("hello");
    },13);
})
}

function printWorld(data){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("world");
        },13);
    })
}

Promise.race( [printhello(),printWorld()])
.then(function(data){
    console.log(data);
},function(err){
    console.log(err);
})