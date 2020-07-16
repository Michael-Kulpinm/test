// первый способ
var str = 'first string';
str = str.split('');
str[0] = str[0].toUpperCase();
console.log(str.join(''));

// второй способ 
var str = 'second string';
console.log(str.substr(0,1).toUpperCase() + str.substr(1));