function Sum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            return i + 1;
        }
    }
}
    
    console.log(Sum([1, 5, 4, 8, 2, 6]));