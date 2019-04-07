

function multiplyup(num){
    return function(input){
        return input*num;
    }
};

let doubler=multiplyup(2);

console.log(doubler(10));

str1="bada";
str2="da";
for(let i=1;i<str1.length;++i){
   console.log( str1.substring(i,str1.length));

}     