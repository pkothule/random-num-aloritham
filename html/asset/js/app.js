let cl = console.log;

//print 1 to 10 number randomly


// 0.001 *10
//0.12 *10
//0.23
//0.34
//0.42
//0.54
//0.65
//0.78
//0.8
//0.93


//cl(Math.ceil (Math.random()* 10));

//print 0 to 10 num

//cl(Math.floor(Math.random()*11));


//print 7 to 18 num random i.e 7 is min and 18 is max

//7+0 =7
//7+1 =8
//7+2 =9

//7+11 = 18
 // 7 is min 18 is max
 //18-7 = 11 so we add + 1 in funaction

//formula = 7 + Math.floor(Math.random()*12)

//let r = 7 + Math.floor(Math.random() * 12);
//cl(r);

//genric function

function printRange(min, max){
    return min + Math.floor(Math.random() * (max - min +1))
}

cl(printRange(7,18));
cl(printRange(70,180));