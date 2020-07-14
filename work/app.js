function sequence(start, increment) {
    let _start = start;

    return function() {
        var sumToReturn = _start;
        sumToReturn += increment;
        _start = sumToReturn;
        return sumToReturn;
        
    };
}

var myCounter = sequence(1,5);

var mkArr = function(fn, times){
    var arr=[];
        for(var i=0;i<times;i++){
            arr[i]=fn();
        }

    return arr;
}

console.log(myCounter());
console.log(myCounter()); 

console.log(mkArr(myCounter, 3))