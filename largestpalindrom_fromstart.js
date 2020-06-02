

function largestPalindrome_fromstart(str){
    if(!str){
        return str;
    }
    if(str.length==1){
        return str;
    }
    let startchar=str[0];

    for(let i=0,j=str.length-1;j>=i;){
        //console.log("outer",i,j);
        if(str[j]==startchar){
           
            let flag=true;
            let jbak=j;
            i=0;
            while(i<=j){
                //console.log("inner",i,j);
                if(str[i]==str[j]){
                    i++;
                    j--;
                    continue;
                }else{
                   // console.log("false");
                    flag=false;
                    break;
                }
            }
            if(flag){
                return jbak;
            }else{
                j=jbak-1;
            }

        }else{
            j--;
        }
    }

    return 0;


}
let str="aa";
console.log(largestPalindrome_fromstart(str));