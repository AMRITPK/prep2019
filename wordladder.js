/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var diff=function(item1,item2){
    let ctr=0;
    for(let i=0;i<item1.length;++i){
        if(item2[i]!=item1[i]){
            ctr++;
            if(ctr>1)return ctr;
        }
    }
    return ctr;
}

var allposs_bak=function(beginWord,wordList,dones){
    let ret=[];
    wordList.forEach(item=>{
        if(!dones.has(item)){
            if(diff(beginWord,item)==1){
                ret.push(item);
             }
        }

    });
    return ret;
}
var aux_bak = function(beginWord, endWord, wordList,ctr,dones,depth) {
    //console.log(beginWord, endWord,ctr,dones,depth);
    if(beginWord==endWord){
        if(depth+1 < ctr.minVal)
            ctr.minVal=depth+1;
        return;
    }if(depth>wordList.length)return;
    let possibles=allposs(beginWord,wordList,dones);
    for(let i=0;i<possibles.length;++i){
      
        let possibleItem=possibles[i];
        if(true || !dones.has(possibleItem)){//is valid
            ctr.value+=1;
            dones.add(possibleItem);
            aux(possibleItem,endWord,wordList,ctr,dones,depth+1);
            dones.delete(possibleItem);
            ctr.value-=1;
        }
        
        
    }
    
};
var ladderLength_bak = function(beginWord, endWord, wordList) {
    let dones=new Set();
    dones.add(beginWord);
    let curr=beginWord;
    let ctr={};
        ctr.value=0;
        ctr.minVal=Infinity;
    aux(beginWord, endWord, wordList,ctr,dones,0); 
    if(ctr.minVal==Infinity)return 0;
    else return ctr.minVal;
};


var print=function(item,wordList){
    let res="";
    item.split("-").forEach(index=>{
        res=res+"->"+wordList[index];
    });
    console.log(res);
}
var allposs=function(beginWord,wordList,donesSet){
    console.log("in allposs",beginWord,donesSet);
    let ret=[];
    wordList.forEach((item,index)=>{
            if(!donesSet.has(""+index)){
                if(diff(beginWord,item)==1)
                ret.push(index);
            }
            
   

    });
    ret.forEach(ind=>console.log(wordList[ind]));
    return ret;
}
var ladderLength=function(beginWord, endWord, wordList) {
    let queue=[];
    wordList.push(beginWord);
    queue.push(wordList.indexOf(beginWord));
    let itemIndex=queue.shift();
    let donesSet=new Set();
    let tempvar=""+itemIndex;
    while(itemIndex!=undefined){
        let arr=allposs(wordList[itemIndex],wordList,donesSet);
        for(let x=0;x<arr.length;++x){
            let possibleItemIndex=arr[x];
            if(possibleItemIndex==wordList.indexOf(endWord)){
                print(tempvar,wordList);
                return tempvar.split("-").length+1;
            }
            queue.push(tempvar+"-"+possibleItemIndex);
        }

        tempvar=queue.shift();
        if(tempvar!=undefined){
            let temparr=tempvar.split("-");
            donesSet=new Set(temparr);
            itemIndex=temparr[temparr.length-1];
            
        }else{
            itemIndex=undefined;
        }

    }
    return 0;
}

let beg="hit";
let end="cog";
let arr=["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
arr=["hot","dot","dog","lot","log","cog"];

 beg="cet";
 end="ism";
arr=["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"];


console.log(ladderLength(beg,end,arr));