
number=50;
 res=[1]

 let fMap=new Map();
 fMap.set(2,0);
 fMap.set(3,0);
 fMap.set(5,0);

 for (let i=1;i<=number;++i){
    let minVal=Math.min(2*res[fMap.get(2)],3*res[fMap.get(3)],5*res[fMap.get(5)]);

    res[i]=minVal;
    if(minVal==2*res[fMap.get(2)]){
        fMap.set(2, fMap.get(2)+1 );
    }
    if(minVal==3*res[fMap.get(3)]){
        fMap.set(3, fMap.get(3)+1 );
    }
    if(minVal==5*res[fMap.get(5)]){
        fMap.set(5, fMap.get(5)+1 );
    }
 }
 console.log(res);



function getUglyNum( n) {
    let uglyNum=[];          // To store ugly numbers
    let i2 = 0, i3 = 0, i5 = 0;
 
    //find next multiple as 1*2, 1*3, 1*5
 
    let next2mul = 2;
    let next3mul = 3;
    let next5mul = 5;
    let next = 1;              //initially the ugly number is 1
 
    uglyNum[0] = 1;
 
    for (let i=1; i<n; i++) {
       next = Math.min(next2mul, next3mul, next5mul);       //find next ugly number
       uglyNum[i] = next;
 
       if (next == next2mul) {
          i2++;             //increase iterator of ugly numbers whose factor is 2
          next2mul = uglyNum[i2]*2;
       }
 
       if (next == next3mul) {
          i3++;             //increase iterator of ugly numbers whose factor is 3
          next3mul = uglyNum[i3]*3;
       }
 
       if (next == next5mul) {
          i5++;              //increase iterator of ugly numbers whose factor is 5
          next5mul = uglyNum[i5]*5;
       }
    }
    return next;        //the nth ugly number
 }
 
 let numbebr=100;
 console.log(res[numbebr-1],getUglyNum(numbebr));