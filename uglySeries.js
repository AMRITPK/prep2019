/**
 * @param {number} n
 * @return {number}
 */
var twosGenerator=function*(series){
    let counter=0;
    while(true){
       yield(series[counter]*2);
        counter++;
    }
    
}
var threesGenerator=function*(series){
     let counter=0;
    while(true){
       yield(series[counter]*3);
        counter++;
    }
}
var fivesGenerator=function*(series){
     let counter=0;
    while(true){
       yield(series[counter]*5);
        counter++;
    }
}

var nthUglyNumber = function(n) {
    let uglySeries=[1,2,3];
    let set=new Set();
    uglySeries.forEach(item=>set.add(item));
    if(uglySeries[n-1]!=undefined){
        return uglySeries[n-1];
    }
    
    let counter=2;
    let toconsider={};
    let twosGen= twosGenerator(uglySeries);
    let threesGen=threesGenerator(uglySeries);
    let fivesGen=fivesGenerator(uglySeries);
    toconsider.twos=twosGen.next().value;  //2,4*
    toconsider.threes=threesGen.next().value; //3,6
    toconsider.fives=fivesGen.next().value;  //5
    while(counter<n-1){
        
       
        
        if(toconsider.twos<=toconsider.threes && toconsider.twos<=toconsider.fives){
            // asmallest
            if(!set.has(toconsider.twos)){
                set.add(toconsider.twos);
                uglySeries.push(toconsider.twos);
                 toconsider.twos=twosGen.next().value;
                counter++;
            }else{
                 toconsider.twos=twosGen.next().value;
            }
        }
        else if(toconsider.threes<=toconsider.twos && toconsider.threes<=toconsider.fives){
            // b smallest
            if(!set.has(toconsider.threes)){
                set.add(toconsider.threes);
                uglySeries.push(toconsider.threes);
                toconsider.threes=threesGen.next().value;
                counter++;
            }else{
                toconsider.threes=threesGen.next().value;
            }
        }
         else{
             //c smallest
              if(!set.has(toconsider.fives)){
                set.add(toconsider.fives);
                uglySeries.push(toconsider.fives);
                 toconsider.fives=fivesGen.next().value;
                  counter++;
            }else{
                toconsider.fives=fivesGen.next().value;
            }
         }
        
    }
    
    return uglySeries[n-1];
    
    
    
};