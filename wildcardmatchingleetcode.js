/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function* possibleItems(str){
    let length=0;
    while(length < str.length){
        console.log("returning",str.charAt(length));
        yield str.charAt(length);
        length+=1;
    }
}
var isvalid=function(item,patternChar){
    console.log("inside isvalid",item,patternChar);
    if (item==patternChar)
        return true;
    else if(patternChar=='*')
        return true;
    else if((patternChar=='?'))
        return true;
    else
        return false;
}

var isMatchAux = function(s, p) {
    //console.log("===>",s,p);
    if(!s && !p){
        console.log("==========>     success");
        return true;
    }
    if(s.lenght==0 && p.length==0){
        console.log("success");
        return true;
    }
    let patternChar=p.charAt(0);
    

    for (let item of  possibleItems(s)){
        if(isvalid(item,patternChar)){
           let newPattern=p.substring(1);
           let newS=s.substring(1);
            if(isMatchAux(newS,newPattern)) return true;

        }
    
    }return false;




};
var isMatch = function(s, p) {
    isMatchAux(s,p);
}

let res=isMatch("adceb","a*eb");
console.log(res);
let poss=possibleItems('a');
console.log(poss.next());
console.log(poss.next());
/*

Input:
s = "adceb"
p = "*a*b"
Output: true

*/