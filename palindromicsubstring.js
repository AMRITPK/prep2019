let ctr=0;
function substrs(str,depth,strlen){
    ctr+=1;
    console.log(ctr,"args=",depth,strlen);
    if(ctr==20)
     {   sys.exit();}
    if(depth >= strlen-1){
        return [str.substring(depth,strlen)];
    }
    //let currstr=str.substring(depth,strlen);
    let ret=[];
    for (let i=depth+1;i<strlen;++i){
        console.log(depth+"-"+i+"==="+i+"-"+strlen);
        (substrs(str,depth,i).join("-")+"-"+substrs(str,i,strlen).join("-")).split("-").forEach(item=> ret.push(item));

    }
    return ret;
}

function ispalin(str){
    for(let i=0;i<Math.ceil(str.length/2);++i){
        if(str.charAt(str.length-1-i)!=str.charAt(i))
            return false;
    }
    return true;
}

function substrsAUX(str){
    let res=[];
    for(let i=0;i<=str.length-1;++i){
        for(let j=i+1;j<=str.length;++j){
            //console.log("-",str.substring(i,j));
            let item=str.substring(i,j);
            if(ispalin(item)){
                res.push([item,i+"-"+j]);
            }
        }
    }
    return res;
}

let str="aa";
let palinsubs=substrsAUX(str);
let dones=new Set();
let beg="0";
let begString="";
let res=[];
console.log(palinsubs);
palinaux(palinsubs,dones,beg,str,begString,res);

console.log(res);
function palinaux(palinsubs,dones,beg,str,begString,res){
    let temp=beg.split("-");
    let paramindex=temp[temp.length-1];

    if(paramindex>=str.length-1){
        res.push((begString+"+"+str.charAt(paramindex)).substring(1).split("+").filter(item=>item)  );
       // console.log(beg,begString+"+"+str.charAt(paramindex));
        return;
    }
 
    palinsubs.forEach((item,index)=>{
        let [begindex,endindex]=item[1];
        if(!dones.has(item[1])){
            let chars=item[0];
            
            if(begindex==paramindex){
                let reference=beg+"="+item[1];
                let refbegString=begString+"+"+chars;
                dones.add(item[1]);
                palinaux(palinsubs,dones,reference,str,refbegString,res);
                dones.delete(item[1]);
            }
            
        }
 
    });
}