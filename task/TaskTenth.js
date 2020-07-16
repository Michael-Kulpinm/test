var arr = [[2, 2, 8], [4, 2], [7]];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
    for (var j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
    }
}
console.log(sum);