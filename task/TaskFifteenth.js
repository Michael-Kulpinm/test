var arr = [1, 6, 0, 7, 2];
recursion(arr);

function recursion(arr) {
    console.log(arr.shift());
    if (arr.length > 0) {
        recursion(arr);
    }
}