

var nqueens={   

     nqueenslocal:function(n){
    let arr= [];
    for (i=0;i<n;++i){
        arr[i]=[];
        for (j=0;j<n;++j){
            arr[i][j]=false;
        }
    }
    console.log(arr);
    let res=[];
    this.aux(n,arr,0,res);
    },


    //input = 4    ..    arr=arr[4]
    aux:function aux(n,arr,dep,res){
        //console.log("---------checking ",dep,i-1);
        if(dep==n){
            console.log(arr);
       //     for (i=0;i<n;++i){
         //       arr[i]=[];
          //      for (j=0;j<n;++j){
          //          arr[i][j]=false;
           //     }
          //  }
        //   arr.forEach(row => {

        //       row.forEach(val =>{
                  
        //             console.log(val);
                 
        //       });
        //       console.log("\n");
        //   });
            return false;

        }
        
        for ( let i =0;i< n;++i){
           
           
             if(this.isValid(i,dep,arr,n)){
                arr[i][dep]=true;
                if( this.aux(n,arr,dep+1,res))
                    return true;
               // console.log("reseting to false",i,dep);
                arr[i][dep]=false;
               
            }
            
           
           // if(i>0 && i<n)
            
           
            
        }
        return false;

    }

    ,isValid:function isValid(ival,dep,arr,n){
       
        console.log("checking for 1->",ival,dep);

        //if (ival==0 && dep==0) return true;
        
        //checking right left
        for (let x=0;x<n;++x){
            
            if(arr[x][dep]) {
                console.log ("ret1");
                return false;
            }

        }
       // console.log("checking for 2->",ival,dep);
        for (let y=0;y<n;++y){
            if(arr[ival][y]) {
                console.log ("ret2");
                return false;
            }
        }
       // console.log("checking for 3->",ival,dep);
        let ctrlimit=(ival>dep)?ival:dep;
        let ivaltemp=ival;
        let depvaltemp=dep;
        for (let ctr=0;ctr<ctrlimit;++ctr){
            ivaltemp=ivaltemp-1;
            depvaltemp=depvaltemp-1;
        
            if(ivaltemp>0&&depvaltemp>0&&ivaltemp<n&&depvaltemp<n) {
                console.log("3333",ivaltemp,depvaltemp);
                if(arr[ivaltemp][depvaltemp]==true){
                    console.log ("ret3333333333333");
                    return false;
                }
            }
        
        


        }

       // console.log("checking for 4->",ival,dep);
        ivaltemp=ival;
        depvaltemp=dep;
        ctrlimit=((ival>dep)?ival:dep);
        for (let ctr=0;ctr<ctrlimit;++ctr){
            ivaltemp=ivaltemp-1;
            depvaltemp=depvaltemp+1;
        
            if(ivaltemp>0&&depvaltemp>0&&ivaltemp<n&&depvaltemp<n) {
                console.log("4444",ivaltemp,depvaltemp);
                if(arr[ivaltemp][depvaltemp]==true){
                    console.log ("ret 4444");
                    return false;
                }
            }
        
        


        }
        //console.log("checking for 5->",ival,dep);
        return true;

    }


}

module.exports= nqueens;

nqueens.nqueenslocal(4);